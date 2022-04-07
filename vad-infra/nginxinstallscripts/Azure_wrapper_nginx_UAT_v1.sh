#!bin/bash
#target="UAT"
#USER="c-bthimmegowda"
target=$1
USER=$2
if [ $target = "DEV" ] || [ $target = "UAT" ] || [ $target = "PROD" ] || [ $target = "QA" ];
then
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --identity  --allow-no-subscriptions
#PAT=`az keyvault secret show --vault-name 'kv-aen-preprod-sc-f02-01' --name 'vad-git-user-p-1' --query value -o tsv`

STORAGEKEY=`az keyvault secret show --vault-name 'kv-aen-preprod-sc-f02-01' --name 'key2-stfileaecpreprodscf02' --query value -o tsv`
sudo mkdir /mnt/stfileaecpreprodscf02
if [ ! -d "/etc/smbcredentials" ]; then
sudo mkdir /etc/smbcredentials
fi
if [ ! -f "/etc/smbcredentials/stfileaecpreprodscf02.cred" ]; then
    sudo bash -c 'echo "username=stfileaecpreprodscf02" >> /etc/smbcredentials/stfileaecpreprodscf02.cred'
    sudo bash -c "echo password=${STORAGEKEY}" >> /etc/smbcredentials/stfileaecpreprodscf02.cred
fi
sudo chmod 600 /etc/smbcredentials/stfileaecpreprodscf02.cred

sudo bash -c 'echo "//stfileaecpreprodscf02.file.core.windows.net/afs-aec-preprod-sc-f02 /mnt/stfileaecpreprodscf02 cifs nofail,vers=3.0,credentials=/etc/smbcredentials/stfileaecpreprodscf02.cred,dir_mode=0777,file_mode=0777,serverino" >> /etc/fstab'
sudo mount -t cifs //stfileaecpreprodscf02.file.core.windows.net/afs-aec-preprod-sc-f02 /mnt/stfileaecpreprodscf02 -o vers=3.0,credentials=/etc/smbcredentials/stfileaecpreprodscf02.cred,dir_mode=0777,file_mode=0777,serverino
mkdir /home/$USER/nginxinstallscripts
cd /home/$USER
#mkdir nginx
#mkdir /usr/share/nginx/html/customErrors
#git clone https://SVCAdmin:Ka989@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
#git clone https://c-ana:ggnwosxruktoery5nawbpyq4udkavvjq@devops.dctabudhabi.ae/Culture/VADRedesign/_git/vad-infra
#git clone https://c-prana:ggnsdsas
cp -r /mnt/stfileaecpreprodscf02/nginxinstallscripts_v1/* /home/$USER/nginxinstallscripts
umount /mnt/stfileaecpreprodscf02
rm -rf /etc/smbcredentials
rm -rf /mnt/stfileaecpreprodscf02
cd /home/$USER/nginxinstallscripts
chmod 755 *
sh wrapper_nginx.sh $target $USER
else
echo "Enter correct target environment"
exit 1
fi