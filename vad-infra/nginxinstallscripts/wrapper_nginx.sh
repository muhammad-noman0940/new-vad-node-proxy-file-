#!/bin/bash
target=$1
USERNAME=$2
if [ $target = "DEV" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/deployagent.sh
elif [ $target = "PROD" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/deployagent_prod.sh
elif [ $target = "QA" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/deployagent_qa.sh
else
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/deployagent_uat.sh
fi


sleep 30
sh /home/$USERNAME/nginxinstallscripts/triggerpipeline.sh $target $USERNAME
sleep 30


if [ $target = "DEV" ];
then
sh /home/$USERNAME/nginxinstallscripts/configure_nginx_dev_env.sh $target $USERNAME
elif [ $target = "PROD" ];
then
sh /home/$USERNAME/nginxinstallscripts/configure_nginx_prod_env.sh $target $USERNAME
elif [ $target = "QA" ];
then
sh /home/$USERNAME/nginxinstallscripts/configure_nginx_qa_env.sh $target $USERNAME
else
sh /home/$USERNAME/nginxinstallscripts/configure_nginx_uat_env.sh $target $USERNAME
fi

sleep 30
if [ $target = "DEV" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/installpermanentagent.sh
elif [ $target = "PROD" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/installpermanentagent_prod.sh
elif [ $target = "QA" ];
then
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/installpermanentagent_qa.sh
else
su - $USERNAME -c /home/$USERNAME/nginxinstallscripts/installpermanentagent_uat.sh
fi

sleep 30
sh /home/$USERNAME/nginxinstallscripts/startpermanentagent.sh $USERNAME
sleep 30