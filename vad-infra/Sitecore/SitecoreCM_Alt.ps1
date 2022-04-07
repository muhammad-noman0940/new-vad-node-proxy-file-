Copy-Item C:\SC\SitecoreCM -Destination C:\inetpub\wwwroot -Recurse
Install-Module -Name 'IISAdministration' -Force
Import-Module -Name 'IISAdministration'
$cert=Get-AzKeyVaultCertificate -VaultName 'Secrets212' -Name 'SitecoreCM1'
$password = Get-AzKeyVaultSecret -VaultName 'Secrets212' -Name 'CMCertPassword'
$secret = Get-AzKeyVaultSecret -VaultName 'Secrets212' -Name $cert.Name
$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$pfxFileByte = $x509Cert.Export($type, $password.SecretValueText)
$certpath="C:\Packages\Certificates\KeyValt.pfx"
# Write to a file
[System.IO.File]::WriteAllBytes($certpath, $pfxFileByte)
$CertPassword = ConvertTo-SecureString -String $($password.SecretValueText) -AsPlainText -Force
Import-PfxCertificate -FilePath $certpath -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword
New-WebAppPool SitecoreCM 
New-WebSite -Name SitecoreCM -ApplicationPool SitecoreCM -Port 443 -ssl -HostHeader SitecoreCM -PhysicalPath "$env:systemdrive\inetpub\wwwroot\SitecoreCM"
$Cert = (Get-ChildItem -Path Cert:\LocalMachine\My) | Where-Object {$_.Subject -match "SitecoreCM"}
$binding=Get-WebBinding -Name 'SitecoreCM' -Protocol "https"
$binding.AddSslCertificate("$($cert.getcerthashstring())","MY")
#Add-Content -Path C:\windows\System32\drivers\etc\hosts. -Value "127.0.0.1 SitecoreCM"
Restart-WebAppPool SitecoreCM