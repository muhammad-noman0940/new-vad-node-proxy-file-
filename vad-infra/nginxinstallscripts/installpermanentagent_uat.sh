#!/bin/bash
USERNAME="c-bthimmegowda"
#AzureAgent installation for Deployment Group
#curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
cd /home/$USERNAME/azagent
PAT=`az keyvault secret show --vault-name 'kv-aen-preprod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
./config.sh remove --unattended -url https://devops.dctabudhabi.ae/Culture/VADRedesign --auth PAT --token $PAT
cd /home/$USERNAME && rm -rf /home/$USERNAME/azagent
cd /home/$USERNAME
#  Install agent
mkdir azagent;cd azagent;curl -fkSL -o vstsagent.tar.gz https://go.microsoft.com/fwlink/?linkid=2066772;tar -zxvf vstsagent.tar.gz; if [ -x "$(command -v systemctl)" ]; then ./config.sh --deploymentgroup --deploymentgroupname "UAT Nginx Servers" --acceptteeeula --deploymentgrouptags "UAT" --adddeploymentgrouptags --agent $HOSTNAME --unattended --url https://devops.dctabudhabi.ae/ --sslskipcertvalidation --work _work --collectionname 'Culture' --projectname 'VADRedesign' --auth PAT --token $PAT --runasservice;  else ./config.sh --deploymentgroup --deploymentgroupname "UAT Nginx Servers" --acceptteeeula --deploymentgrouptags "UAT" --adddeploymentgrouptags --agent $HOSTNAME --url https://devops.dctabudhabi.ae/ --sslskipcertvalidation --work _work --collectionname 'Culture' --projectname 'VADRedesign' --auth PAT --token $PAT; ./run.sh; fi
