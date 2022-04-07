Install-Module -Name 'IISAdministration' -Force
Import-Module -Name 'IISAdministration'
$cert=Get-AzKeyVaultCertificate -VaultName 'vadtestvault' -Name 'XConnectReferenceData'
$password = Get-AzKeyVaultSecret -VaultName 'vadtestvault' -Name 'XCCollectionSecret'
$secret = Get-AzKeyVaultSecret -VaultName 'vadtestvault' -Name $cert.Name
$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$pfxFileByte = $x509Cert.Export($type, $password.SecretValueText)
$certpath="C:\Packages\Certificates\XConnectReferenceData.pfx"
# Write to a file
[System.IO.File]::WriteAllBytes($certpath, $pfxFileByte)
$CertPassword = ConvertTo-SecureString -String $($password.SecretValueText) -AsPlainText -Force
Import-PfxCertificate -FilePath $certpath -Exportable -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword
Install-SitecoreConfiguration -Path "C:\Packages\Devops\Configs\xconnect-xp1-ReferenceData.json"
#$Cert = (Get-ChildItem -Path Cert:\LocalMachine\My) | Where-Object {$_.Subject -match "XCCollection"}
#$binding=Get-WebBinding -Name 'XCCollection' -Protocol "https"
#$binding.AddSslCertificate("$($cert.getcerthashstring())","MY")
#Add-Content -Path C:\windows\System32\drivers\etc\hosts. -Value "127.0.0.1 SitecoreCM"
#Restart-WebAppPool XCCollection