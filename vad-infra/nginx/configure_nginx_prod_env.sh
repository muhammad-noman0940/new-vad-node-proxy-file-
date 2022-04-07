#!/bin/bash
#install Nginx
#sudo apt update
#sudo apt install nginx -y
#sudo systemctl restart nginx
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'nginxvault' --name 'devopskey' --query value -o tsv`
az extension add --name azure-devops
export AZURE_DEVOPS_EXT_PAT=$PAT

##Az DevOps Download Certificates from Key Vault.
az keyvault certificate download --vault-name nginxvault -n mycert -f mycert.crt -e DER && openssl x509 -in mycert.crt -inform DER  -noout -sha1 -fingerprint
az keyvault secret download --file mysecret.txt --name devopskey --vault-name nginxvault
az keyvault secret download --file mykey.key --name devopskey --vault-name nginxvault

## Move certificate to appropriate directory

mv mycert.crt /etc/nginx/conf.d/servercert.crt &&  mv mykey.key /etc/nginx/conf.d/serverkey.key &&  mv mysecret.txt /var/lib/nginx/ssl_passwords.txt

sed -i 's@https://10.2.1.4:3000@https://10.2.1.500:3000@g' /home/cloudops/nginx/nginx_home/nginx.conf
#sed -i 's@Protected@reg_administrator@g' /home/cloudops/nginx/nginx_home/nginx.conf
#mv /home/cloudops/nginx/nginx_home/.htpasswd /etc/nginx/conf.d/
mv /home/cloudops/nginx/nginx_home/nginx.conf /etc/nginx
#sudo systemctl reload nginx
## remove agent
