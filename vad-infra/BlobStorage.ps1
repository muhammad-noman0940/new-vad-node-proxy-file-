#Powersehll logs to be stored in F:\DeploymentRun\
if (!(Test-Path 'F:\DeploymentRun\')) {
    mkdir F:\DeploymentRun\
}

Start-Transcript -Path F:\DeploymentRun\Wrapper.log
#Install Nuget, Az Modules (keyvault,accounts,sotrage)
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force
Install-Module -Name CredentialManager -Force
Install-module az.keyvault -Force
Install-module az.Accounts -Force
Install-module az.storage -Force
Install-module az.compute -Force
#Enable IIS and install scripting tools to enable Web Administrations
Install-WindowsFeature -Name Web-Server -IncludeAllSubFeature 
Enable-WindowsOptionalFeature -Online -FeatureName IIS-ManagementScriptingTools
#Import the required modules 
Install-Module sqlserver
Import-Module sqlserver
Import-Module WebAdministration
Import-Module Az.Accounts
Import-module az.keyvault
Import-module az.storage

#Use maanged identity to connect to Azure 
Connect-AzAccount -Identity
#Get storage account details to mount the share drive
$connectTestResult = Test-NetConnection -ComputerName stfileaecprodscf02.file.core.windows.net -Port 445
if ($connctTestResult.TcpTestSucceeded)  {
$storageAccount = Get-AzStorageAccount -ResourceGroupName DCTScaleSEt -Name stfileaecprodscf02
$storageKey = (Get-AzStorageAccountKey -ResourceGroupName $storageAccount.ResourceGroupName -Name $storageAccount.StorageAccountName | select -first 1).Value
#$storageContext = New-AzStorageContext -StorageAccountName $storageAccount.StorageAccountName -StorageAccountKey $storageKey
#$share = Get-AzStorageShare -Context $storageContext
#$secKey = ConvertTo-SecureString -String $storageKey -AsPlainText -Force
#$credential = New-Object System.Management.Automation.PSCredential -ArgumentList "Azure\$($storageAccount.StorageAccountName)", $secKey
New-StoredCredential -UserName $storageAccount.StorageAccountName -Password $storageKey -Persist ENTERPRISE
$cred= Get-StoredCredential
#Drive mounted as Z drive
New-PSDrive -Name Z -PSProvider FileSystem -Root "\\$($storageAccount.StorageAccountName).file.core.windows.net\afs-aec-prod-sc-f02" -Credential $cred -Persist -Scope Global
} 
else
{
	Write-Host "Connection Failure"
}

#Copy the files from mounted drive to F:\InstallFiles drive to bypass exe unknown source error
Copy-Item -Path Z:\ -Destination E:\InstallFiles\ -Recurse 


#Install Git 
$gitExePath = "C:\Program Files\Git\bin\git.exe"

try {
    $ProgressPreference = 'SilentlyContinue'

    if (!(Test-Path $gitExePath)) {
        Write-Host "`nInstalling git..." -ForegroundColor Yellow
        Start-Process -Wait E:\InstallFiles\Git-2.27.0-64-bit.exe -ArgumentList /silent
    }
   
}
finally {
    Write-Host "`nInstallation complete!`n`n" -ForegroundColor Green
}


#Get Azure Devops PAT to clone the vad_infra Git Repo
$PATRepo = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name 'vad-git-user'
$path='E:\Temp'
If(!(test-path $path))
{
    mkdir E:\Temp
}
Set-Location E:\Temp
Remove-Item -Recurse -Force F:\vad_infra -ErrorAction SilentlyContinue
#Redirect git warnings to null so as to not stop the script
$env:GIT_REDIRECT_STDERR = '2>&1'
& 'C:\Program Files\Git\bin\git.exe' config --global http.sslVerify false
& 'C:\Program Files\Git\bin\git.exe' clone https://c-smehta:Seta%40981@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
Move-Item -Path E:\Temp\vad_infra -Destination E:\ -Force 
Set-Location E:\vad_infra
& '.\ConfigureScript.ps1' $args[0] $args[1]
Stop-Transcript
#comment to make 512x multip 