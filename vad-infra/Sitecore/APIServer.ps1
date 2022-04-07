Install-Module -Name 'IISAdministration' -Force
Import-Module -Name 'IISAdministration'
<#$cert=Get-AzKeyVaultCertificate -VaultName 'kv-aen-prod-sc-f02-01' -Name 'APIServer'
$password = 'P@ssw0rd@123'
$secret = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name $cert.Name
$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$pfxFileByte = $x509Cert.Export($type, $password.SecretValueText)
$certpath="E:\Certificates\APIServer.pfx"
[System.IO.File]::WriteAllBytes($certpath, $pfxFileByte)
$CertPassword = ConvertTo-SecureString -String $($password.SecretValueText) -AsPlainText -Force
Import-PfxCertificate -FilePath $certpath -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword#>
$SiteName = "api.visitabudhabi.ae"
$HostName = "api.visitabudhabi.ae"
$SiteFolder = Join-Path -Path 'E:\inetpub\wwwroot' -ChildPath $SiteName

New-WebSite -Name $SiteName -PhysicalPath $SiteFolder -Force
$IISSite = "IIS:\Sites\$SiteName"
Set-ItemProperty $IISSite -name  Bindings -value @{protocol="https";bindingInformation="*:443:$HostName"}
Start-WebSite -Name $SiteName
#$Cert = (Get-ChildItem -Path Cert:\LocalMachine\My) | Where-Object {$_.Subject -match "APIServer"}
#$binding=Get-WebBinding -Name 'APIServer' -Protocol "https"
#$binding.AddSslCertificate("$($cert.getcerthashstring())","MY")
#Restart-WebAppPool APIServer