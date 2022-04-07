$PATDG = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name 'vad-devops-user'
$env:AZURE_DEVOPS_EXT_PAT = $PATDG.secretvaluetext
$role='Sitecore Identity Server Deployment'
az extension add --name azure-devops
echo $env:AZURE_DEVOPS_EXT_PAT | az devops login
az devops configure --defaults  organization=https://devops.dctabudhabi.ae/Culture project=VADRedesign
az pipelines release create --description 'Deploy Sitecore' --definition-name $role