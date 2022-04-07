if (!(Test-Path 'F:\Certificates\')) {
    mkdir F:\Certificates\
}
Set-Location E:\vad_infra\Sitecore
& 'E:\vad_infra\Sitecore\PreRequisites.ps1' 
switch( $args[0]){
    'CM' {& 'E:\vad_infra\Sitecore\TempSitecoreCMGroup.ps1' $args[1]}
    'CD' {& 'E:\vad_infra\Sitecore\TempSitecoreCDGroup.ps1' $args[1]}
    'SI' {& 'E:\vad_infra\Sitecore\TempSitecoreIdentityGroup.ps1' $args[1]}
    'SIS' {& 'E:\vad_infra\Sitecore\TempSitecoreIndexerGroup.ps1' $args[1]}
    'API' {& 'E:\vad_infra\Sitecore\TempAPIGroup.ps1' $args[1]} 
    'XC' {& 'E:\vad_infra\Sitecore\TempSitecoreXCGroup.ps1' $args[1]}
    'CM' {& 'E:\vad_infra\Sitecore\ReleaseCM.ps1' $args[1]}
    'CD' {& 'E:\vad_infra\Sitecore\ReleaseCD.ps1' $args[1]}
    'XC' {& 'E:\vad_infra\Sitecore\ReleaseXC.ps1' $args[1]}
    'SI' {& 'E:\vad_infra\Sitecore\ReleaseIdentity.ps1' $args[1]}
    'SIS' {& 'E:\vad_infra\Sitecore\ReleaseIndexer.ps1' $args[1]}
    'API' {& 'E:\vad_infra\Sitecore\ReleaseAPI.ps1' $args[1]}
}