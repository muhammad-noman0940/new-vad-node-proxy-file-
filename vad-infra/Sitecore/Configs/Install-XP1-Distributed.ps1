# General Settings
# The Prefix that will be used on SOLR, Website and Database instances.
$Prefix = "XP1"
# The root folder with the license file deployment config files and WDP packages.
$SCInstallRoot = "C:\ResourceFiles"
# Alternate root folder to install websites. If left on default [systemdrive]:\inetpub\wwwroot\ will be used.
$SitePhysicalRoot = ""
# The location of the Sitecore license file.
$LicenseFile = "$SCInstallRoot\license.xml"
# The URL of the SOLR Service, must be HTTPS
$SolrUrl = "https://solr_host:8983/solr"
# The Folder that Solr has been installed in.
$SolrRoot = "C:\Solr-8.1.1"
# The Name of the Solr Service.
$SolrService = "Solr-8.1.1"
# A SQL user with sysadmin privileges.
$SqlAdminUser = "sa"
# The password for $SqlAdminUser.
$SqlAdminPassword = "12345"
#The random string key used for establishing connection with IdentityService
$ClientSecret = "SIF-Default"
# The name for the certificate.
$CertificateName = "$prefix.xconnect"

# Hosts names
# The DNS name or IP of the Solr computer.
$SolrComputerName = ""
# The DNS name or IP of the SQL Instance.
$SqlServer = ""
# The DNS name of the Identity Server computer.
$IdentityServerComputerName = ""
# The DNS name of the Content Management computer.
$CMComputerName = ""
# The DNS name of the Content Delivery computer.
$CDComputerName = ""
# The DNS name of the Processing computer.
$PrcComputerName = ""
# The DNS name of the Reporting computer.
$RepComputerName = ""
# The DNS name of the Collection computer.
$CollectionComputerName = ""
# The DNS name of the Collection Search computer.
$CollectionSearchComputerName = ""
# The DNS name of the Reference Data computer.
$ReferenceDataComputerName = ""
# The DNS name of the Marketing Automation computer.
$MarketingAutomationComputerName = ""
# The DNS name of the Marketing Automation Reporting computer.
$MarketingAutomationReportingComputerName = ""
# The DNS name of the Cortex Processing computer.
$CortexProcessingComputerName = ""
# The DNS name of the Cortex Reporting computer.
$CortexReportingComputerName = ""

# Site Names
# The name for the XConnect processing engine service.
$CortexProcessingSitename = "$Prefix.cort.prc"
# The name for the XConnect collection site.
$CollectionSitename = "$Prefix.collection"
# The name for the search site.
$CollectionSearchSitename = "$Prefix.collectionsearch"
# The name for the Marketing Automation site.
$MarketingAutomationSitename = "$Prefix.ma"
# The name for the Marketing Automation Reporting site.
$MarketingAutomationReportingSitename = "$Prefix.ma.rep"
# The name for the Reference Data site.
$ReferenceDataSitename = "$Prefix.refdata"
# The name for the XConnect reporting servcice.
$CortexReportingSitename = "$Prefix.cort.rep"
# The name for the Reporting site.
$RepSitename = "$Prefix.rep"
# The name for the Processing site.
$PrcSitename = "$Prefix.prc"
# The name for the Content Management site.
$CMSitename = "$Prefix.cm"
# The name for the Content Delivery site.
$CDSitename = "$Prefix.cd"
# Identity Server site name.
$IdentityServerSiteName = "$prefix.identityserver"

# Paths to WDP packages
# The path to the Sitecore Content Management package.
$CMPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_cm.scwdp.zip").FullName
# The path to the Sitecore Content Delivery package.
$CDPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_cd.scwdp.zip").FullName
# The path to the Identity Server package.
$IdentityServerPackage = (Get-ChildItem "$SCInstallRoot\Sitecore.IdentityServer * rev. * (OnPrem)_identityserver.scwdp.zip").FullName
# The path to the Sitecore Content Reporting package.
$RepPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_rep.scwdp.zip").FullName
# The path to the Sitecore Content Processing package.
$PrcPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_prc.scwdp.zip").FullName
# The path to the XConnect Collection package.
$CollectionPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1collection.scwdp.zip").FullName
# The path to the XConnect Collection Search package.
$CollectionSearchPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1collectionsearch.scwdp.zip").FullName
# The path to the XConnect Processing engine package.
$CortexProcessingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1cortexprocessing.scwdp.zip").FullName
# The path to the XConnect Marketing Automation package.
$MarketingAutomationPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1marketingautomation.scwdp.zip").FullName
# The path to the XConnect Marketing Automation Reporting package.
$MarketingAutomationReportingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1marketingautomationreporting.scwdp.zip").FullName
# The path to the XConnect Reporting package.
$CortexReportingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1cortexreporting.scwdp.zip").FullName
# The path to the XConnect Reference Data package.
$ReferenceDataPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1referencedata.scwdp.zip").FullName

# Service URLs
# The URL for the Identity Server password recovery, this should be the URL of the CM Instance.
$PasswordRecoveryUrl = "https://$CMComputerName"
# The URL of the Identity Authority
$SitecoreIdentityAuthority = "https://$IdentityServerComputerName"
# Allowed CORS Origins, urls of all clients should be added here
$allowedCorsOrigins = "https://$CMComputerName"
# The URL for the Processing service.
$ProcessingService = "http://$PrcComputerName"
# The URL for the Reporting service.
$ReportingService = "https://$RepComputerName"
# The URL of the Cortex Reporting Service
$CortexReportingService = "https://$CortexReportingComputerName"
# The URL of the XConnect Collection service.
$XConnectCollectionService = "https://$CollectionComputerName"
# The URL of the XConnect Reference Data service
$XConnectReferenceDataService = "https://$ReferenceDataComputerName"
# The URL of the Marketing Automaton Service
$MarketingAutomationOperationsService = "https://$MarketingAutomationComputerName"
# The URL of the Marteting Automation Reporting Service
$MarketingAutomationReportingService = "https://$MarketingAutomationReportingComputerName"
# The URL for the XConnect Search Service.
$XConnectCollectionSearchService = "https://$CollectionSearchComputerName"
# The URL of the Machine Learning service
$MachineLearningServerUrl = ""

#Getting Hosts User credentials:
Write-Host "Hosts user name: "
$HostsUserName = Read-Host
Write-Host "Hosts user password: "
$HostsUserPassword = Read-Host
Clear-Host

# Install XM1 via combined partials file.
$DistributedDeploymentParams = @{
    Path = "$SCInstallRoot\XP1-Distributed.json"
    ComputerUserName = $HostsUserName
    ComputerPassword = $HostsUserPassword
    IdentityServerComputerName = $IdentityServerComputerName
    SolrComputerName = $SolrComputerName
    CollectionComputerName = $CollectionComputerName
    CollectionSearchComputerName = $CollectionSearchComputerName
    ReferenceDataComputerName = $ReferenceDataComputerName
    MarketingAutomationComputerName = $MarketingAutomationComputerName
    MarketingAutomationReportingComputerName = $MarketingAutomationReportingComputerName
    CortexProcessingComputerName = $CortexProcessingComputerName
    CortexReportingComputerName = $CortexReportingComputerName
    CMComputerName = $CMComputerName
    CDComputerName = $CDComputerName
    PrcComputerName = $PrcComputerName
    RepComputerName = $RepComputerName
    LicenseFile = $LicenseFile
    IdentityServerSiteName = $IdentityServerSiteName
    Prefix = $Prefix
    CollectionPackage = $CollectionPackage
    CollectionSearchPackage = $CollectionSearchPackage
    CortexProcessingPackage = $CortexProcessingPackage
    MarketingAutomationPackage = $MarketingAutomationPackage
    MarketingAutomationReportingPackage = $MarketingAutomationReportingPackage
    CortexReportingPackage = $CortexReportingPackage
    ReferenceDataPackage = $ReferenceDataPackage
    CDPackage = $CDPackage
    CMPackage = $CMPackage
    RepPackage = $RepPackage
    PrcPackage = $PrcPackage
    IdentityServerPackage = $IdentityServerPackage
    CortexProcessingSitename = $CortexProcessingSitename
    CollectionSitename = $CollectionSitename
    CollectionSearchSitename = $CollectionSearchSitename
    MarketingAutomationSitename = $MarketingAutomationSitename
    MarketingAutomationReportingSitename = $MarketingAutomationReportingSitename
    ReferenceDataSitename = $ReferenceDataSitename
    CortexReportingSitename = $CortexReportingSitename
    CDSitename = $CDSitename
    CMSitename = $CMSitename
    RepSitename = $RepSitename
    PrcSitename = $PrcSitename
    ProcessingService = $ProcessingService
    ReportingService = $ReportingService
    CortexReportingService = $CortexReportingService
    XConnectCollectionSearchService = $XConnectCollectionSearchService
    XConnectCollectionService = $XConnectCollectionService
    XConnectReferenceDataService = $XConnectReferenceDataService
    MarketingAutomationOperationsService = $MarketingAutomationOperationsService
    MarketingAutomationReportingService = $MarketingAutomationReportingService
    AllowedCorsOrigins = $AllowedCorsOrigins
    MachineLearningServerUrl = $MachineLearningServerUrl
    ClientSecret = $ClientSecret
    SitecoreIdentityAuthority = $SitecoreIdentityAuthority
    PasswordRecoveryUrl = $PasswordRecoveryUrl
    SqlAdminUser = $SqlAdminUser
    SqlAdminPassword = $SqlAdminPassword
    SqlServer = $SqlServer
    SolrUrl = $SolrUrl
    SolrService = $SolrService
    SolrRoot = $SolrRoot
    CertificateName = $CertificateName
    SitePhysicalRoot = $SitePhysicalRoot
}

Push-Location $SCInstallRoot

Install-SitecoreConfiguration @DistributedDeploymentParams -Verbose *>&1 | Tee-Object XP1-Distributed.log

Pop-Location

# SIG # Begin signature block
# MIIXwQYJKoZIhvcNAQcCoIIXsjCCF64CAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUzidC8mtjfZL7z/uBXiGByQHf
# pJ2gghL8MIID7jCCA1egAwIBAgIQfpPr+3zGTlnqS5p31Ab8OzANBgkqhkiG9w0B
# AQUFADCBizELMAkGA1UEBhMCWkExFTATBgNVBAgTDFdlc3Rlcm4gQ2FwZTEUMBIG
# A1UEBxMLRHVyYmFudmlsbGUxDzANBgNVBAoTBlRoYXd0ZTEdMBsGA1UECxMUVGhh
# d3RlIENlcnRpZmljYXRpb24xHzAdBgNVBAMTFlRoYXd0ZSBUaW1lc3RhbXBpbmcg
# Q0EwHhcNMTIxMjIxMDAwMDAwWhcNMjAxMjMwMjM1OTU5WjBeMQswCQYDVQQGEwJV
# UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xMDAuBgNVBAMTJ1N5bWFu
# dGVjIFRpbWUgU3RhbXBpbmcgU2VydmljZXMgQ0EgLSBHMjCCASIwDQYJKoZIhvcN
# AQEBBQADggEPADCCAQoCggEBALGss0lUS5ccEgrYJXmRIlcqb9y4JsRDc2vCvy5Q
# WvsUwnaOQwElQ7Sh4kX06Ld7w3TMIte0lAAC903tv7S3RCRrzV9FO9FEzkMScxeC
# i2m0K8uZHqxyGyZNcR+xMd37UWECU6aq9UksBXhFpS+JzueZ5/6M4lc/PcaS3Er4
# ezPkeQr78HWIQZz/xQNRmarXbJ+TaYdlKYOFwmAUxMjJOxTawIHwHw103pIiq8r3
# +3R8J+b3Sht/p8OeLa6K6qbmqicWfWH3mHERvOJQoUvlXfrlDqcsn6plINPYlujI
# fKVOSET/GeJEB5IL12iEgF1qeGRFzWBGflTBE3zFefHJwXECAwEAAaOB+jCB9zAd
# BgNVHQ4EFgQUX5r1blzMzHSa1N197z/b7EyALt0wMgYIKwYBBQUHAQEEJjAkMCIG
# CCsGAQUFBzABhhZodHRwOi8vb2NzcC50aGF3dGUuY29tMBIGA1UdEwEB/wQIMAYB
# Af8CAQAwPwYDVR0fBDgwNjA0oDKgMIYuaHR0cDovL2NybC50aGF3dGUuY29tL1Ro
# YXd0ZVRpbWVzdGFtcGluZ0NBLmNybDATBgNVHSUEDDAKBggrBgEFBQcDCDAOBgNV
# HQ8BAf8EBAMCAQYwKAYDVR0RBCEwH6QdMBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0y
# MDQ4LTEwDQYJKoZIhvcNAQEFBQADgYEAAwmbj3nvf1kwqu9otfrjCR27T4IGXTdf
# plKfFo3qHJIJRG71betYfDDo+WmNI3MLEm9Hqa45EfgqsZuwGsOO61mWAK3ODE2y
# 0DGmCFwqevzieh1XTKhlGOl5QGIllm7HxzdqgyEIjkHq3dlXPx13SYcqFgZepjhq
# IhKjURmDfrYwggSjMIIDi6ADAgECAhAOz/Q4yP6/NW4E2GqYGxpQMA0GCSqGSIb3
# DQEBBQUAMF4xCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3Jh
# dGlvbjEwMC4GA1UEAxMnU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNlcyBD
# QSAtIEcyMB4XDTEyMTAxODAwMDAwMFoXDTIwMTIyOTIzNTk1OVowYjELMAkGA1UE
# BhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMTQwMgYDVQQDEytT
# eW1hbnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIFNpZ25lciAtIEc0MIIBIjAN
# BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAomMLOUS4uyOnREm7Dv+h8GEKU5Ow
# mNutLA9KxW7/hjxTVQ8VzgQ/K/2plpbZvmF5C1vJTIZ25eBDSyKV7sIrQ8Gf2Gi0
# jkBP7oU4uRHFI/JkWPAVMm9OV6GuiKQC1yoezUvh3WPVF4kyW7BemVqonShQDhfu
# ltthO0VRHc8SVguSR/yrrvZmPUescHLnkudfzRC5xINklBm9JYDh6NIipdC6Anqh
# d5NbZcPuF3S8QYYq3AhMjJKMkS2ed0QfaNaodHfbDlsyi1aLM73ZY8hJnTrFxeoz
# C9Lxoxv0i77Zs1eLO94Ep3oisiSuLsdwxb5OgyYI+wu9qU+ZCOEQKHKqzQIDAQAB
# o4IBVzCCAVMwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAKBggrBgEFBQcDCDAO
# BgNVHQ8BAf8EBAMCB4AwcwYIKwYBBQUHAQEEZzBlMCoGCCsGAQUFBzABhh5odHRw
# Oi8vdHMtb2NzcC53cy5zeW1hbnRlYy5jb20wNwYIKwYBBQUHMAKGK2h0dHA6Ly90
# cy1haWEud3Muc3ltYW50ZWMuY29tL3Rzcy1jYS1nMi5jZXIwPAYDVR0fBDUwMzAx
# oC+gLYYraHR0cDovL3RzLWNybC53cy5zeW1hbnRlYy5jb20vdHNzLWNhLWcyLmNy
# bDAoBgNVHREEITAfpB0wGzEZMBcGA1UEAxMQVGltZVN0YW1wLTIwNDgtMjAdBgNV
# HQ4EFgQURsZpow5KFB7VTNpSYxc/Xja8DeYwHwYDVR0jBBgwFoAUX5r1blzMzHSa
# 1N197z/b7EyALt0wDQYJKoZIhvcNAQEFBQADggEBAHg7tJEqAEzwj2IwN3ijhCcH
# bxiy3iXcoNSUA6qGTiWfmkADHN3O43nLIWgG2rYytG2/9CwmYzPkSWRtDebDZw73
# BaQ1bHyJFsbpst+y6d0gxnEPzZV03LZc3r03H0N45ni1zSgEIKOq8UvEiCmRDoDR
# EfzdXHZuT14ORUZBbg2w6jiasTraCXEQ/Bx5tIB7rGn0/Zy2DBYr8X9bCT2bW+IW
# yhOBbQAuOA2oKY8s4bL0WqkBrxWcLC9JG9siu8P+eJRRw4axgohd8D20UaF5Mysu
# e7ncIAkTcetqGVvP6KUwVyyJST+5z3/Jvz4iaGNTmr1pdKzFHTx/kuDDvBzYBHUw
# ggUrMIIEE6ADAgECAhAHplztCw0v0TJNgwJhke9VMA0GCSqGSIb3DQEBCwUAMHIx
# CzAJBgNVBAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3
# dy5kaWdpY2VydC5jb20xMTAvBgNVBAMTKERpZ2lDZXJ0IFNIQTIgQXNzdXJlZCBJ
# RCBDb2RlIFNpZ25pbmcgQ0EwHhcNMTcwODIzMDAwMDAwWhcNMjAwOTMwMTIwMDAw
# WjBoMQswCQYDVQQGEwJVUzELMAkGA1UECBMCY2ExEjAQBgNVBAcTCVNhdXNhbGl0
# bzEbMBkGA1UEChMSU2l0ZWNvcmUgVVNBLCBJbmMuMRswGQYDVQQDExJTaXRlY29y
# ZSBVU0EsIEluYy4wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC7PZ/g
# huhrQ/p/0Cg7BRrYjw7ZMx8HNBamEm0El+sedPWYeAAFrjDSpECxYjvK8/NOS9dk
# tC35XL2TREMOJk746mZqia+g+NQDPEaDjNPG/iT0gWsOeCa9dUcIUtnBQ0hBKsuR
# bau3n7w1uIgr3zf29vc9NhCoz1m2uBNIuLBlkKguXwgPt4rzj66+18JV3xyLQJoS
# 3ZAA8k6FnZltNB+4HB0LKpPmF8PmAm5fhwGz6JFTKe+HCBRtuwOEERSd1EN7TGKi
# xczSX8FJMz84dcOfALxjTj6RUF5TNSQLD2pACgYWl8MM0lEtD/1eif7TKMHqaA+s
# m/yJrlKEtOr836BvAgMBAAGjggHFMIIBwTAfBgNVHSMEGDAWgBRaxLl7Kgqjpepx
# A8Bg+S32ZXUOWDAdBgNVHQ4EFgQULh60SWOBOnU9TSFq0c2sWmMdu7EwDgYDVR0P
# AQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMHcGA1UdHwRwMG4wNaAzoDGG
# L2h0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9zaGEyLWFzc3VyZWQtY3MtZzEuY3Js
# MDWgM6Axhi9odHRwOi8vY3JsNC5kaWdpY2VydC5jb20vc2hhMi1hc3N1cmVkLWNz
# LWcxLmNybDBMBgNVHSAERTBDMDcGCWCGSAGG/WwDATAqMCgGCCsGAQUFBwIBFhxo
# dHRwczovL3d3dy5kaWdpY2VydC5jb20vQ1BTMAgGBmeBDAEEATCBhAYIKwYBBQUH
# AQEEeDB2MCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2VydC5jb20wTgYI
# KwYBBQUHMAKGQmh0dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydFNI
# QTJBc3N1cmVkSURDb2RlU2lnbmluZ0NBLmNydDAMBgNVHRMBAf8EAjAAMA0GCSqG
# SIb3DQEBCwUAA4IBAQBozpJhBdsaz19E9faa/wtrnssUreKxZVkYQ+NViWeyImc5
# qEZcDPy3Qgf731kVPnYuwi5S0U+qyg5p1CNn/WsvnJsdw8aO0lseadu8PECuHj1Z
# 5w4mi5rGNq+QVYSBB2vBh5Ps5rXuifBFF8YnUyBc2KuWBOCq6MTRN1H2sU5LtOUc
# Qkacv8hyom8DHERbd3mIBkV8fmtAmvwFYOCsXdBHOSwQUvfs53GySrnIYiWT0y56
# mVYPwDj7h/PdWO5hIuZm6n5ohInLig1weiVDJ254r+2pfyyRT+02JVVxyHFMCLwC
# ASs4vgbiZzMDltmoTDHz9gULxu/CfBGM0waMDu3cMIIFMDCCBBigAwIBAgIQBAkY
# G1/Vu2Z1U0O1b5VQCDANBgkqhkiG9w0BAQsFADBlMQswCQYDVQQGEwJVUzEVMBMG
# A1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSQw
# IgYDVQQDExtEaWdpQ2VydCBBc3N1cmVkIElEIFJvb3QgQ0EwHhcNMTMxMDIyMTIw
# MDAwWhcNMjgxMDIyMTIwMDAwWjByMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGln
# aUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMTEwLwYDVQQDEyhE
# aWdpQ2VydCBTSEEyIEFzc3VyZWQgSUQgQ29kZSBTaWduaW5nIENBMIIBIjANBgkq
# hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+NOzHH8OEa9ndwfTCzFJGc/Q+0WZsTrb
# RPV/5aid2zLXcep2nQUut4/6kkPApfmJ1DcZ17aq8JyGpdglrA55KDp+6dFn08b7
# KSfH03sjlOSRI5aQd4L5oYQjZhJUM1B0sSgmuyRpwsJS8hRniolF1C2ho+mILCCV
# rhxKhwjfDPXiTWAYvqrEsq5wMWYzcT6scKKrzn/pfMuSoeU7MRzP6vIK5Fe7SrXp
# dOYr/mzLfnQ5Ng2Q7+S1TqSp6moKq4TzrGdOtcT3jNEgJSPrCGQ+UpbB8g8S9MWO
# D8Gi6CxR93O8vYWxYoNzQYIH5DiLanMg0A9kczyen6Yzqf0Z3yWT0QIDAQABo4IB
# zTCCAckwEgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwEwYDVR0l
# BAwwCgYIKwYBBQUHAwMweQYIKwYBBQUHAQEEbTBrMCQGCCsGAQUFBzABhhhodHRw
# Oi8vb2NzcC5kaWdpY2VydC5jb20wQwYIKwYBBQUHMAKGN2h0dHA6Ly9jYWNlcnRz
# LmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEFzc3VyZWRJRFJvb3RDQS5jcnQwgYEGA1Ud
# HwR6MHgwOqA4oDaGNGh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEFz
# c3VyZWRJRFJvb3RDQS5jcmwwOqA4oDaGNGh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNv
# bS9EaWdpQ2VydEFzc3VyZWRJRFJvb3RDQS5jcmwwTwYDVR0gBEgwRjA4BgpghkgB
# hv1sAAIEMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3LmRpZ2ljZXJ0LmNvbS9D
# UFMwCgYIYIZIAYb9bAMwHQYDVR0OBBYEFFrEuXsqCqOl6nEDwGD5LfZldQ5YMB8G
# A1UdIwQYMBaAFEXroq/0ksuCMS1Ri6enIZ3zbcgPMA0GCSqGSIb3DQEBCwUAA4IB
# AQA+7A1aJLPzItEVyCx8JSl2qB1dHC06GsTvMGHXfgtg/cM9D8Svi/3vKt8gVTew
# 4fbRknUPUbRupY5a4l4kgU4QpO4/cY5jDhNLrddfRHnzNhQGivecRk5c/5CxGwcO
# kRX7uq+1UcKNJK4kxscnKqEpKBo6cSgCPC6Ro8AlEeKcFEehemhor5unXCBc2XGx
# DI+7qPjFEmifz0DLQESlE/DmZAwlCEIysjaKJAL+L3J+HNdJRZboWR3p+nRka7Lr
# ZkPas7CM1ekN3fYBIM6ZMWM9CBoYs4GbT8aTEAb8B4H6i9r5gkn3Ym6hU/oSlBiF
# LpKR6mhsRDKyZqHnGKSaZFHvMYIELzCCBCsCAQEwgYYwcjELMAkGA1UEBhMCVVMx
# FTATBgNVBAoTDERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3LmRpZ2ljZXJ0LmNv
# bTExMC8GA1UEAxMoRGlnaUNlcnQgU0hBMiBBc3N1cmVkIElEIENvZGUgU2lnbmlu
# ZyBDQQIQB6Zc7QsNL9EyTYMCYZHvVTAJBgUrDgMCGgUAoHAwEAYKKwYBBAGCNwIB
# DDECMAAwGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEO
# MAwGCisGAQQBgjcCARUwIwYJKoZIhvcNAQkEMRYEFKDaKS/StNwaniBSTEjMVwo4
# uEVWMA0GCSqGSIb3DQEBAQUABIIBAIDLDJSzvmXXkFiWAN7yRUCL1NNdc0pylw9c
# uCCFHvX+N430/6qV6joaPRMpxrtwJJXA5ZzmLSplJTJEyMc21T0rwe7ALAOpcGSF
# xiS8//EWuHJNB5uHYDfuqG5LhXqpb3njFVd3o5Cw/9Jxkm0HxpbcAkTgyBx902o9
# bxAqyB36gHWv8EF2ZqHmUSwn2occ2UmhMI5oy4iNy9MVhJf/pfbfw88RqpSMc1qj
# Che0phD9XwVwW2RpfDQvggn1stEXX0hQp0jAcjKN/n7JS7bI9GT77XPcwC1cQbTl
# AayZc9KACt6uU6RFC+B9kMtl7uDxByl4Btk9b1ec9E9+r2R/pZWhggILMIICBwYJ
# KoZIhvcNAQkGMYIB+DCCAfQCAQEwcjBeMQswCQYDVQQGEwJVUzEdMBsGA1UEChMU
# U3ltYW50ZWMgQ29ycG9yYXRpb24xMDAuBgNVBAMTJ1N5bWFudGVjIFRpbWUgU3Rh
# bXBpbmcgU2VydmljZXMgQ0EgLSBHMgIQDs/0OMj+vzVuBNhqmBsaUDAJBgUrDgMC
# GgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcN
# MTkxMTEzMDg1NTU3WjAjBgkqhkiG9w0BCQQxFgQUnhWfksXJrmyt6DmmFRdV1STC
# ev0wDQYJKoZIhvcNAQEBBQAEggEAa9vwtgEgWG+Zi93InEELLe/70VR63StkDCp3
# SpEp6pxcbf90MBpwuUptRpuEjINOchufcWN5Otlfmst0zQeA5ZNZo1fC8oPEOhQH
# flCzMRmc8j2xoi+G7KUo2KkQWevGdRn/lGt+bdrrva+Eb1DAXUV0db27S50aVP4H
# FlOJ5qFvS/AW9dl8OefJogjUpSuIIIrm7leUbUgh0BifeN4keCohVYc2EtDDnbQF
# oNPAu6nbYxbJcghPrOUSlEGdgVH2J8JRx/i+9gP0C8jipN2tshDf4lgrdcFTeENX
# PxA2PRaEPJ10lbJeLeZDVBerK0aX2ji9GJIWx/UUjPYul1etLg==
# SIG # End signature block
