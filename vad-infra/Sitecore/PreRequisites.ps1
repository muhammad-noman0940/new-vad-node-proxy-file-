#Install Azure CLISQLSysClrTypes,msodbcsql,URL Rewrite 2.1, Shared Management Objects
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\azure-cli-2.8.0.msi /quiet';
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\SQLSysClrTypes(1).msi /quiet';
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\msodbcsql(1).msi /quiet';
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\msodbcsql.msi /quiet'; 
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\rewrite_amd64_en-US.msi /quiet'; 
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\SharedManagementObjects(1).msi /quiet'; 
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\SharedManagementObjects.msi /quiet';
Start-Process msiexec.exe -Wait -ArgumentList '/I E:\InstallFiles\SWebDeploy_amd64_en-US.msi /quiet';
Start-Process -FilePath E:\InstallFiles\ChromeSetup.exe -Args "/silent /install" -Verb RunAs -Wait; 
#Install SIF
Register-PSRepository -Name SitecoreGallery -SourceLocation https://sitecore.myget.org/F/sc-powershell/api/v2
Install-Module SitecoreInstallFramework -AllowClobber -Force
#Install SIF PreRequisites
Install-SitecoreConfiguration -Path "E:\vad_infra\Sitecore\Configs\Prerequisites.json"
#Reload env variables
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 
