###########Update Vault Details###############
Start-Sleep -Seconds 60
Install-module az.Accounts -Force
Install-module az.storage -Force
Import-Module Az.Accounts
Import-module az.keyvault
Import-module az.storage
Connect-AzAccount -Identity

switch( $args[0]){
    'PROD' {$PATRepo = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name 'vad-devops-user'}
    'UAT' {$PATRepo = Get-AzKeyVaultSecret -VaultName 'kv-aen-preprod-sc-f02-01' -Name 'vad-devops-user'}
}

$value1 = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($PATRepo.SecretValue))
$pair = ":$($value1)"
$AzureDevOpsAuthenicationHeader = @{Authorization = 'Basic ' + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair)) }
$OrganizationName = "Culture"
$ProjName="VADRedesign"
$UriOrga = "https://devops.dctabudhabi.ae/$($OrganizationName)/"
$UriProj = $UriOrga + "$($ProjName)/"
switch( $args[0]){
    'PROD' {
$body ='{
  "definitionId": 53,
  "description": "Creating REST release",
  "isDraft": false,
  "reason": "none",
  "manualEnvironments": null
}'
}
    'UAT' {
$body ='{
  "definitionId": 52,
  "description": "Creating REST release",
  "isDraft": false,
  "reason": "none",
  "manualEnvironments": null
}'
}
}


$uriRel =$UriProj + "_apis/release/releases?api-version=5.0"
 
$uriRelDef = $UriProj + "_apis/release/definitions?api-version=5.0"
#$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
$result = Invoke-RestMethod -Uri $uriRel -Method POST -Body $body -Headers $AzureDevOpsAuthenicationHeader -ContentType "application/json" -Verbose -Debug