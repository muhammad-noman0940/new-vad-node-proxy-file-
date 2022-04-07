#!bin/bash
#target="PROD"
#USERNAME="nxautomation"
target=$1
USER=$2
if [ $target = "DEV" ] || [ $target = "UAT" ] || [ $target = "PROD" ] || [ $target = "QA" ];
then
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
#PAT=`az keyvault secret show --vault-name 'kv-aen-prod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`

STORAGEKEY=`az keyvault secret show --vault-name 'kv-aen-prod-sc-f02-01' --name 'vad-file-storage-key' --query value -o tsv`
sudo mkdir /mnt/stfileaecprodscf02
if [ ! -d "/etc/smbcredentials" ]; then
sudo mkdir /etc/smbcredentials
fi
if [ ! -f "/etc/smbcredentials/stfileaecprodscf02.cred" ]; then
    sudo bash -c 'echo "username=stfileaecprodscf02" >> /etc/smbcredentials/stfileaecprodscf02.cred'
    sudo bash -c "echo password=${STORAGEKEY}" >> /etc/smbcredentials/stfileaecprodscf02.cred
fi
sudo chmod 600 /etc/smbcredentials/stfileaecprodscf02.cred

sudo bash -c 'echo "//stfileaecprodscf02.file.core.windows.net/afs-aec-prod-sc-f02 /mnt/stfileaecprodscf02 cifs nofail,vers=3.0,credentials=/etc/smbcredentials/stfileaecprodscf02.cred,dir_mode=0777,file_mode=0777,serverino" >> /etc/fstab'
sudo mount -t cifs //stfileaecprodscf02.file.core.windows.net/afs-aec-prod-sc-f02 /mnt/stfileaecprodscf02 -o vers=3.0,credentials=/etc/smbcredentials/stfileaecprodscf02.cred,dir_mode=0777,file_mode=0777,serverino
mkdir /home/$USER/nginxinstallscripts
cd /home/$USER
#mkdir nginx
#mkdir /usr/share/nginx/html/customErrors
#git clone https://-sana:9@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
#git clone https://cransa:ggnuvobffycpvha3cdwrewaxwosxruktoery5nawbpyq4udkavvjq@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
#git clone https://crsana:ggnuvobffycz33cdxwosxruktoery5asdsas
cp -r /mnt/stfileaecprodscf02/nginxinstallscripts/* /home/$USER/nginxinstallscripts
umount /mnt/stfileaecprodscf02
rm -rf /etc/smbcredentials
rm -rf /mnt/stfileaecprodscf02
cd /home/$USER/nginxinstallscripts
chmod 755 *
sh wrapper_nginx.sh $target $USER
else
echo "Enter correct target environment"
exit 1
fi