Install-Module -Name 'IISAdministration' -Force
Import-Module -Name 'IISAdministration'
$cert=Get-AzKeyVaultCertificate -VaultName 'Secrets212' -Name 'SitecoreCM1'
$password = Get-AzKeyVaultSecret -VaultName 'Secrets212' -Name 'XCCollectionSecret'
$secret = Get-AzKeyVaultSecret -VaultName 'Secrets212' -Name $cert.Name
$secretByte = [Convert]::FromBase64String($secret.secretvaluetext)
$x509Cert = new-object System.Security.Cryptography.X509Certificates.X509Certificate2
$x509Cert.Import($secretByte, "", "Exportable,PersistKeySet")
$type = [System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx
$pfxFileByte = $x509Cert.Export($type, $password.SecretValueText)
$certpath="C:\Packages\Certificates\SitecoreCM.pfx"
# Write to a file
[System.IO.File]::WriteAllBytes($certpath, $pfxFileByte)
$CertPassword = ConvertTo-SecureString -String $($password.SecretValueText) -AsPlainText -Force
Import-PfxCertificate -FilePath $certpath -Exportable -CertStoreLocation Cert:\LocalMachine\My -Password $certpassword
#Solr to be removed in DCT
Install-SitecoreConfiguration -Path "C:\Packages\Devops\Configs\xconnect-solr.json"
Install-SitecoreConfiguration -Path "C:\Packages\Devops\Configs\sitecore-solr.json"
Install-SitecoreConfiguration -Path "C:\Packages\Devops\Configs\sitecore-xp1-cm.json"
