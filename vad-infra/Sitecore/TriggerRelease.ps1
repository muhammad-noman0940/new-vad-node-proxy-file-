$env:AZURE_DEVOPS_EXT_PAT = 'nia6zi4jarqhsh4g5gsycj6e74v5qniw3lgpi6icv6ui2mm2s4oa'
az extension add --name azure-devops
echo $env:AZURE_DEVOPS_EXT_PAT | az devops login
az devops configure --defaults  organization=https://dev.azure.com/shwmehta2 project=VAD-Test
az pipelines release create --description 'Deploy Sitecore' --definition-name 'Deploy Sitecore Roles'