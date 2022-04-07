#!/bin/bash
az login --identity  --allow-no-subscriptions
PAT=`az keyvault secret show --vault-name 'kv-aen-prod-sc-f02-01' --name 'vad-devops-user' --query value -o tsv`
./config.sh remove --unattended -url https://devops.dctabudhabi.ae/Culture/VADRedesign --auth PAT --token $PAT