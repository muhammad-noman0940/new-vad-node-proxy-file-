$path = Get-ChildItem -Path C:\azagent -recurse -filter "config.cmd" -File 
& $path.Fullname remove --unattended --auth PAT --token cru5ko6zhnjwzipd2grar6cc2acgutvpvjxj5at27glm2cka4qja
$RmPath =  Split-Path $path.Fullname
Remove-Item -Path $RmPath -ErrorAction SilentlyContinue -Force -Recurse
$PATDG = Get-AzKeyVaultSecret -VaultName 'kv-aen-prod-sc-f02-01' -Name 'vad-devops-user'
$agentname=hostname
$ErrorActionPreference="Stop";If($PSVersionTable.PSVersion -lt (New-Object System.Version("3.0"))){ throw "The minimum version of Windows PowerShell that is required by the script (3.0) does not match the currently running version of Windows PowerShell." };If(-NOT (Test-Path $env:SystemDrive\'azagent')){mkdir $env:SystemDrive\'azagent'}; cd $env:SystemDrive\'azagent'; for($i=1; $i -lt 100; $i++){$destFolder="A"+$i.ToString();if(-NOT (Test-Path ($destFolder))){mkdir $destFolder;cd $destFolder;break;}}; $agentZip="$PWD\agent.zip";$DefaultProxy=[System.Net.WebRequest]::DefaultWebProxy;$securityProtocol=@();$securityProtocol+=[Net.ServicePointManager]::SecurityProtocol;$securityProtocol+=[Net.SecurityProtocolType]::Tls12;[Net.ServicePointManager]::SecurityProtocol=$securityProtocol;$WebClient=New-Object Net.WebClient; $Uri='https://go.microsoft.com/fwlink/?linkid=2066756';if($DefaultProxy -and (-not $DefaultProxy.IsBypassed($Uri))){$WebClient.Proxy= New-Object Net.WebProxy($DefaultProxy.GetProxy($Uri).OriginalString, $True);}; $WebClient.DownloadFile($Uri, $agentZip);Add-Type -AssemblyName System.IO.Compression.FileSystem;[System.IO.Compression.ZipFile]::ExtractToDirectory( $agentZip, "$PWD");.\config.cmd --deploymentgroup --deploymentgroupname "PROD XC Server" --deploymentgrouptags $args[0] --adddeploymentgrouptags --agent $agentname --runasservice --work '_work' --unattended --url 'https://devops.dctabudhabi.ae/' --collectionname 'Culture' --projectname 'VADRedesign' --auth PAT --token $($PATDG.secretvaluetext); Remove-Item $agentZip;