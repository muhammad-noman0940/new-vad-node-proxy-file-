#!/bin/bash
USERNAME=$1
cd /home/$USERNAME/azagent
./svc.sh install; ./svc.sh start
rm -rf /home/$USER/nginxinstallscripts