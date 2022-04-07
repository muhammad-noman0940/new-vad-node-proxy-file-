#!/bin/bash
USERNAME="cloudops"
#AzureAgent installation for Deployment Group
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'nginxvault' --name 'devopskey' --query value -o tsv`
cd /home/$USERNAME
#  Install agent
mkdir azagent;cd azagent;curl -fkSL -o vstsagent.tar.gz https://vstsagentpackage.azureedge.net/agent/2.170.1/vsts-agent-linux-x64-2.170.1.tar.gz;tar -zxvf vstsagent.tar.gz; ./config.sh --deploymentgroup --deploymentgroupname "Prod_nginx_dg" --acceptteeeula --deploymentgrouptags "nginx" --adddeploymentgrouptags "nginx" --agent $HOSTNAME --unattended --url https://dev.azure.com/panrana2/ --work _work --projectname 'dct-nginx' --auth PAT --token $PAT --runasservice
