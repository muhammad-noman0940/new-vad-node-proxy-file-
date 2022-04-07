Install-Module -Name 'IISAdministration' -Force
Import-Module -Name 'IISAdministration'
$cert=Get-AzKeyVaultCertificate -VaultName 'vadtestvault' -Name 'IdentityServer'
#$password = Get-AzKeyVaultSecret -VaultName 'vadtestvault' -Name 'IdentityServerPass'
$secret = Get-AzKeyVaultSecret -VaultName 'vadtestvault' -Name $cert.Name
$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$pfxFileByte = $x509Cert.Export($type, $password.SecretValueText)
$certpath="F:\Certificates\IdentityServer.pfx"
[System.IO.File]::WriteAllBytes($certpath, $pfxFileByte)
$CertPassword = ConvertTo-SecureString -String $($password.SecretValueText) -AsPlainText -Force
Import-PfxCertificate -FilePath $certpath -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword
Install-SitecoreConfiguration -Path "F:\vad_infra\Sitecore\Configs\IdentityServer.json"
$Cert = (Get-ChildItem -Path Cert:\LocalMachine\My) | Where-Object {$_.Subject -match "IdentityServer"}
$binding=Get-WebBinding -Name 'IdentityServer' -Protocol "https"
$binding.AddSslCertificate("$($cert.getcerthashstring())","MY")
Restart-WebAppPool IdentityServer