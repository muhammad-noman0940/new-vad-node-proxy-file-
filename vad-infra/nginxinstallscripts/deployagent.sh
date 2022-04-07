#!/bin/bash
#AzureAgent installation for Deployment Group
USERNAME="cloudops"
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'nginxvault' --name 'devopskey' --query value -o tsv`
cd /home/$USERNAME
#  Install agent
mkdir azagent;cd azagent;curl -fkSL -o vstsagent.tar.gz https://go.microsoft.com/fwlink/?linkid=2066772;tar -zxvf vstsagent.tar.gz; if [ -x "$(command -v systemctl)" ]; then ./config.sh --deploymentgroup --deploymentgroupname "Temp Nginx Server" --acceptteeeula --deploymentgrouptags "DEV" --adddeploymentgrouptags "DEV"  --agent $HOSTNAME --unattended --url https://devops.dctabudhabi.ae/ --work _work --collectionname 'Culture' --projectname 'VADRedesign' --auth PAT --token $PAT --runasservice; sudo ./svc.sh install; sudo ./svc.sh start; else ./config.sh --deploymentgroup --deploymentgroupname "Temp Nginx Server" --acceptteeeula --deploymentgrouptags "DEV" --adddeploymentgrouptags "DEV" --agent $HOSTNAME --url https://devops.dctabudhabi.ae/ --work _work --collectionname 'Culture' --projectname 'VADRedesign' --auth PAT --token $PAT; ./run.sh;fi
sudo apt update
sudo apt install nginx -y
sudo systemctl restart nginx