#!/bin/bash
USERNAME=$2
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
cd /home/$USERNAME/azagent
#mkdir /home/$USERNAME/nginx
./svc.sh install; ./svc.sh start
#az extension add --name azure-devops
sleep 60

export AZURE_DEVOPS_EXT_PAT=$PAT
target=$1
if [ $target = "DEV" ];
then
curl -k -u c-prana:$PAT --request POST https://devops.dctabudhabi.ae/Culture/VADRedesign/_apis/release/releases?api-version=5.0 \
  --header "Content-type: application/json" \
  --data '{"definitionId": 14}'
sleep 60
elif [ $target = "PROD" ];
then
PAT=`az keyvault secret show --vault-name 'kv-aen-prod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
curl -k -u c-prana:$PAT --request POST https://devops.dctabudhabi.ae/Culture/VADRedesign/_apis/release/releases?api-version=5.0 \
  --header "Content-type: application/json" \
  --data '{"definitionId": 14}'
sleep 60
elif [ $target = "QA" ];
then
curl -k -u c-prana:$PAT --request POST https://devops.dctabudhabi.ae/Culture/VADRedesign/_apis/release/releases?api-version=5.0 \
  --header "Content-type: application/json" \
  --data '{"definitionId": 14}'
sleep 60
elif [ $target = "UAT" ];
then
PAT=`az keyvault secret show --vault-name 'kv-aen-preprod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
curl -k -u c-prana:$PAT --request POST https://devops.dctabudhabi.ae/Culture/VADRedesign/_apis/release/releases?api-version=5.0 \
  --header "Content-type: application/json" \
  --data '{"definitionId": 26}'
else
echo "enter correct environment"
exit 1
fi

sleep 120
