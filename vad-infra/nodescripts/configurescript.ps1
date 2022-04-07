Set-Location  E:\packages\dct-node
echo $args > output.txt
echo $args[0] > output0.txt
echo $args[1] > output1.txt
Connect-AzAccount -Identity
New-NetFirewallRule -DisplayName 'nodeproxy-inbound' -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
$nodeExePath = "C:\Program Files\nodejs\node.exe"

try {
    $ProgressPreference = 'SilentlyContinue'

    if (!(Test-Path $nodeExePath)) {
        Write-Host "`nInstalling node..." -ForegroundColor Yellow
        Start-Process -Wait E:\InstallFiles\node-v12.18.1-x64.msi -ArgumentList /passive
    }
   
}
finally {
    Write-Host "`nNodeInstallation complete!`n`n" -ForegroundColor Green
}
[System.Environment]::SetEnvironmentVariable('PM2_HOME','E:\npm',[System.EnvironmentVariableTarget]::Machine)
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";E:\npm\", [System.EnvironmentVariableTarget]::Machine)
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\nodejs\", "Machine")
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
#npm install pm2@latest -g

npm config set prefix "E:\\npm"
npm config set cache "E:\\npm-cache"
npm config set temp "E:\\temp"
#npm install pm2 -g
mkdir E:\Certificates
mkdir F:\pm2-logs
$cert=Get-AzKeyVaultCertificate -VaultName 'kv-aen-preprod-sc-f02-01' -Name 'np-uat-visitabudhabi-ae'
#$password = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name 'sch-sc2-dct-gov-ae'
$secret = Get-AzKeyVaultSecret -VaultName 'kv-aen-preprod-sc-f02-01' -Name $cert.Name
#$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$value1 = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secret.SecretValue))
$secretByte = [Convert]::FromBase64String($value1)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$password="P@ssw0rd@009988"
$pfxFileByte = $x509Cert.Export($type, $password)
[System.IO.File]::WriteAllBytes("E:\Certificates\np-uat-visitabudhabi-ae.pfx", $pfxFileByte)
Add-Content E:\Certificates\password.txt $password
$content = [System.IO.File]::ReadAllText("E:\Certificates\password.txt")
$content = $content.Trim()
[System.IO.File]::WriteAllText("E:\Certificates\password.txt", $content)
#Copy-Item \\vssc2-np-00001C\Certificates\server.cert E:\certificates
#Copy-Item \\vssc2-np-00001C\Certificates\server.key E:\certificates
#$certpath="E:\Certificates\nproxy.pfx"
#$CertPassword = ConvertTo-SecureString -String $($password) -AsPlainText -Force
#Import-PfxCertificate -FilePath $certpath -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword
#Add-Content C:\Windows\System32\drivers\etc\hosts "`n10.123.175.46  cd.uat.visitabudhabi.ae"
#Add-Content C:\Windows\System32\drivers\etc\hosts "`n10.123.175.110 uat.visitabudhabi.ae"

$cert = Get-ChildItem Cert:\LocalMachine\root | where { $_.Subject -imatch "DCT Root Certificate Authority" }
$DERCert    = 'E:\certificates\DCT_ROOT_DER_Encoded.cer'
$Base64Cert = 'E:\certificates\DCT_ROOT_Base64_Encoded.cer' 
Export-Certificate -Cert $cert -FilePath $DERCert
Start-Process -FilePath 'certutil.exe' -ArgumentList "-encode $DERCert $Base64Cert" -WindowStyle Hidden
[System.Environment]::SetEnvironmentVariable('NODE_EXTRA_CA_CERTS','E:\\certificates\\DCT_ROOT_Base64_Encoded.cer',[System.EnvironmentVariableTarget]::Machine)
switch( $args[0]){
    'NP' {& 'E:\packages\dct-node\TempNodeproxyGroup.ps1' $args[1]}
    'NP' {& 'E:\packages\dct-node\ReleaseNodeproxy.ps1' $args[1]}
}
