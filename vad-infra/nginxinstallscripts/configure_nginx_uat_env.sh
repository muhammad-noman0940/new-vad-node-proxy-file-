#!/bin/bash
#install Nginx
#sudo apt update
#sudo apt install nginx -y
#sudo systemctl restart nginx
#USERNAME="c-bthimmegowda"
USERNAME=$2
#curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'kv-aen-preprod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
#az extension add --name azure-devops
export AZURE_DEVOPS_EXT_PAT=$PAT
cd /home/$USERNAME/azagent
cd /home/$USERNAME

#PASSKEY="P@ssw0rd@009988"

# to be done as part of release pipeline
#mv /home/c-bthimmegowda/azagent/_work/r1/a/nginx_home/nginx/certificates/* /home/$USERNAME

az keyvault certificate download --vault-name kv-aen-preprod-sc-f02-01 -n uat-visitabudhabi-ae -f uatservercert-ae.crt
az keyvault certificate download --vault-name kv-aen-preprod-sc-f02-01 -n uat-visitabudhabi-cn -f uatservercert-cn.crt

#openssl pkcs12 -in prodservercert-ae.pfx -nocerts -out prodservercert-ae1.key -passin pass:$PASSKEY -passout pass:$PASSKEY
#openssl pkcs12 -in prodservercert-cn.pfx -nocerts -out prodservercert-cn1.key -passin pass:$PASSKEY -passout pass:$PASSKEY
#openssl pkcs12 -in uatservercert-ae.pfx -clcerts -nokeys -out uatservercert-ae.crt -passin pass:$PASSKEY
#openssl pkcs12 -in prodservercert-cn.pfx -clcerts -nokeys -out prodservercert-cn.crt -passin pass:$PASSKEY
#openssl rsa -in prodservercert-cn1.key -out prodservercert-cn.key -passin pass:$PASSKEY
#openssl rsa -in prodservercert-ae1.key -out prodservercert-ae.key -passin pass:$PASSKEY

mv uatservercert-ae.crt /etc/nginx/conf.d/uatservercert-ae.crt && mv uatservercert-cn.crt /etc/nginx/conf.d/uatservercert-cn.crt
#mv /home/$USERNAME/nginxinstallscripts/start_and_stop.service /etc/systemd/system/
#sed -i 's@127.0.0.1 localhost@127.0.0.1 uat.visitabudhabi.ae@g' /etc/hosts
#sed -i 's@#auth_basic@auth_basic@g' /etc/nginx/nginx.conf
#sed -i 's@#auth_basic_user_file@auth_basic_user_file@g' /etc/nginx/nginx.conf
#systemctl enable  
cd /home/$USERNAME/azagent
./svc.sh stop
./svc.sh uninstall
