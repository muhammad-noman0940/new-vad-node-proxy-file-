###Install azure modules
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force
Install-Module -Name CredentialManager -Force
Install-module az.keyvault -Force
Install-module az.Accounts -Force
Install-module az.storage -Force
Import-Module Az.Accounts
Import-module az.keyvault
Import-module az.storage
Add-Type -AssemblyName System.Web
Connect-AzAccount -Identity
#New-NetFirewallRule -DisplayName 'nodeproxy-inbound' -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
Set-TimeZone -Name "Arabian standard Time"
$connectTestResult = Test-NetConnection -ComputerName stfileaecpreprodscf02.file.core.windows.net -Port 445
if ($connectTestResult.TcpTestSucceeded)  {
$storageAccount = Get-AzStorageAccount -ResourceGroupName rg-aec-preprod-sc-f02 -Name stfileaecpreprodscf02
$storageKey = (Get-AzStorageAccountKey -ResourceGroupName $storageAccount.ResourceGroupName -Name $storageAccount.StorageAccountName | select -first 1).Value
$storageContext = New-AzStorageContext -StorageAccountName $storageAccount.StorageAccountName -StorageAccountKey $storageKey
$share = Get-AzStorageShare -Context $storageContext
$secKey = ConvertTo-SecureString -String $storageKey -AsPlainText -Force
#$credential = New-Object System.Management.Automation.PSCredential -ArgumentList "Azure\$($storageAccount.StorageAccountName)", $secKey
###########New-StoredCredential 
$cred= New-StoredCredential -UserName $storageAccount.StorageAccountName -Password $storageKey -Persist ENTERPRISE
$cred1 = Get-StoredCredential -Target $cred.TargetName
New-PSDrive -Name T -PSProvider FileSystem -Root "\\$($storageAccount.StorageAccountName).file.core.windows.net\$($share.Name)" -Credential $cred1 -Persist -Scope Global
} 
else
{
	Write-Host "Connection Failure"
}
#New-Item 'HKLM:Software\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\ZoneMap\Domains\vadautomation.file.core.windows.net\www' -Force | New-ItemProperty -Name http -Value 2 -PropertyType DWORD -Force | Out-Null
mkdir E:\InstallFiles
Copy-Item -Path \\stfileaecpreprodscf02.file.core.windows.net\afs-aec-preprod-sc-f02\Git-2.27.0-64-bit.exe -Destination E:\InstallFiles\ -Recurse 
Copy-Item -Path \\stfileaecpreprodscf02.file.core.windows.net\afs-aec-preprod-sc-f02\Node\node-v12.18.1-x64.msi -Destination E:\InstallFiles\ -Recurse 
Copy-Item -Path \\stfileaecpreprodscf02.file.core.windows.net\afs-aec-preprod-sc-f02\nssm-2.24 -Destination E:\ -Recurse
#Copy-Item -Path \\stfileaecpreprodscf02.file.core.windows.net\afs-aec-preprod-sc-f02\npm -Destination E:\ -Recurse 

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
#$PATRepo="xn4zfqhtchj5yqbjuf4njwneeqidp2rkz62rixiseh4hjgaowinq"
$PATRepo = Get-AzKeyVaultSecret -VaultName 'kv-aen-preprod-sc-f02-01' -Name 'vad-git-user-p-1'
$value1 = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($PATRepo.SecretValue))
$encodedPAT = [System.Web.HttpUtility]::UrlEncode($value1) 
#$encodedPAT = [System.Web.HttpUtility]::UrlEncode($PATRepo.SecretValueText)

mkdir E:\packages\
cd  E:\packages\
mkdir dct-node
mkdir E:\installscripts
Remove-Item -Recurse -Force E:\packages\dct-node\* -ErrorAction SilentlyContinue
Set-Location E:\installscripts
$ENV:GIT_REDIRECT_STDERR = '2>&1'
& 'C:\Program Files\Git\bin\git.exe' config --global http.sslVerify false 
& 'C:\Program Files\Git\bin\git.exe' clone -b feature/nodeuat http://SVC-GVAdmin:$($encodedPAT)@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
Move-Item -Path E:\installscripts\vad-infra\nodescripts\* -Destination E:\packages\dct-node -Force 
$NSSMPath = (Get-Command "E:\nssm-2.24\win64\nssm.exe").Source
$NewServiceName = "pm2service"
$PoShPath= (Get-Command powershell).Source
$PoShScriptPath = "E:\packages\dct-node\startpm2.ps1"
$argument = '-ExecutionPolicy Bypass -NoProfile -File "{0}"' -f $PoShScriptPath
& $NSSMPath install $NewServiceName $PoShPath $argument
cd E:\packages\dct-node
echo $args > custom0.txt
echo $args[0] > custom.txt
echo $args[1] > custom1.txt
& '.\configurescript.ps1' $args[0] $args[1]