Expand-Archive -Path "F:\InstallFiles\Sitecore\Sitecore 9.3.0 rev. 003498 (OnPrem)_xp1collectionsearch.scwdp.zip" -DestinationPath "F:\SC\Indexer Service" -ErrorAction SilentlyContinue
Copy-Item -Path "F:\InstallFiles\Sitecore\license.xml" -Destination "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\App_Data\" -ErrorAction SilentlyContinue

#Below 2 commands are not required as solr is pre-confirgure
#Install-SitecoreConfiguration -Path "F:\InstallFiles\Sitecore\Configs\xconnect-solr.json"
#Install-SitecoreConfiguration -Path "F:\InstallFiles\Sitecore\Configs\sitecore-solr.json"
#Replace Solr Path and SQL Connection String
((Get-Content -path "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\App_Config\ConnectionStrings.config" -Raw) -replace 'http://localhost:8983/solr/xdb/','https://localhost:8983/solr/sitecore_xdb/') | Set-Content -Path "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\App_Config\ConnectionStrings.config" 
((Get-Content -path "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\App_Config\ConnectionStrings.config" -Raw) -replace 'Data Source=.;Database=Sitecore.Xdb.Collection.Database.Sql.ShardMapManagerDb;Integrated Security=true','user id=collectionuser;password=SIF-Default;data source=.\SQLEXPRESS;Initial Catalog=_Xdb.Collection.ShardMapManager') | Set-Content -Path "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\App_Config\ConnectionStrings.config" 
$params = @{
  Name = "SCIndexer"
  BinaryPathName = "F:\SC\Indexer Service\Content\Website\App_Data\jobs\continuous\IndexWorker\Sitecore.XConnectSearchIndexer.exe"
  DisplayName = "Sitecore Indexer Service"
  StartupType = "Automatic"
  Description = "This is Sitecore Indexer Service."
}
New-Service @params -ErrorAction SilentlyContinue
Start-Service SCIndexer