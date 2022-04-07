#!/bin/bash
#install Nginx
#sudo apt update
#sudo apt install nginx -y
#sudo systemctl restart nginx
#USERNAME="nxautomation"
USERNAME=$2
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'kv-aen-prod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
#az extension add --name azure-devops
export AZURE_DEVOPS_EXT_PAT=$PAT
cd /home/$USERNAME/azagent
cd /home/$USERNAME

#PASSKEY="nginxserver@1989"

# to be done as part of release pipeline
#mv /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/certificates/* /home/$USERNAME

az keyvault certificate download --vault-name kv-aen-prod-sc-f02-01 -n visitabudhabi-ae -f prodservercert-ae.crt
az keyvault certificate download --vault-name kv-aen-prod-sc-f02-01 -n visitabudhabi-cn -f prodservercert-cn.crt

#openssl pkcs12 -in prodservercert-ae.pfx -nocerts -out prodservercert-ae1.key -passin pass:$PASSKEY -passout pass:$PASSKEY
#openssl pkcs12 -in prodservercert-cn.pfx -nocerts -out prodservercert-cn1.key -passin pass:$PASSKEY -passout pass:$PASSKEY
#openssl pkcs12 -in prodservercert-ae.pfx -clcerts -nokeys -out prodservercert-ae.crt -passin pass:$PASSKEY
#openssl pkcs12 -in prodservercert-cn.pfx -clcerts -nokeys -out prodservercert-cn.crt -passin pass:$PASSKEY
#openssl rsa -in prodservercert-cn1.key -out prodservercert-cn.key -passin pass:$PASSKEY
#openssl rsa -in prodservercert-ae1.key -out prodservercert-ae.key -passin pass:$PASSKEY

mv prodservercert-ae.crt /etc/nginx/conf.d/prodservercert-ae.crt && mv prodservercert-cn.crt /etc/nginx/conf.d/prodservercert-cn.crt

#sed -i 's\[_AE_SERVER_NAME_]\visitabudhabi.ae\g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf
#sed -i 's@_FULL_PATH_TO_AE_CRT_@/etc/nginx/conf.d/prodservercert-ae.crt@g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf
#sed -i 's@_FULL_PATH_TO_AE_KEY_@/etc/nginx/conf.d/prodservercert-ae.key@g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf
#sed -i 's@_CN_SERVER_NAME_@visitabudhabi.cn@g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf
#sed -i 's@_FULL_PATH_TO_CN_CRT_@/etc/nginx/conf.d/prodservercert-cn.crt@g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf
#sed -i 's@_FULL_PATH_TO_CN_KEY_@/etc/nginx/conf.d/prodservercert-cn.key@g' /home/nxautomation/azagent/_work/r1/a/nginx_home/nginx/nginx.conf

cd /home/$USERNAME/azagent
./svc.sh stop
./svc.sh uninstall
