# General Settings
# Prefix for SOLR collection and SQL database instances
$Prefix = "XP1"
# The Password for the Sitecore Admin User. This will be regenerated if left on the default.
$SitecoreAdminPassword = ""
# Folder with the install files in it.
$SCInstallRoot = "C:\ResourceFiles"
# Alternate root folder to install websites. If left on default [systemdrive]:\inetpub\wwwroot\ will be used.
$SitePhysicalRoot = ""
# The location of the license file.
$LicenseFile = "$SCInstallRoot\license.xml"
# The URL of the SOLR Service, must be HTTPS
$SolrUrl = "https://localhost:8983/solr"
# The Folder that Solr has been installed in.
$SolrRoot = "C:\Solr-8.1.1"
# The Name of the Solr Service.
$SolrService = "Solr-8.1.1"
# The DNS name or IP of the SQL Instance.
$SqlServer = "localhost"
# A SQL user with sysadmin privileges.
$SqlAdminUser = "sa"
# The password for $SqlAdminUser.
$SqlAdminPassword = "12345"
# The name for the Content Delivery site.
$ContentDeliverySiteName = "$prefix.cd"
# The name for the Content Management site.
$ContentManagementSiteName = "$prefix.cm"
# The name for the Reporting site.
$ReportingSiteName = "$prefix.rep"
# The name for the Processing site.
$ProcessingSiteName = "$prefix.prc"
# The name for the Reference Data site.
$ReferenceDateSiteName = "$prefix.refdata"
# Identity Server site name.
$IdentityServerSiteName = "$prefix.identityserver"
# The name for the Marketing Automation site.
$XP1MarketingAutomationSiteName = "$prefix.ma"
# The name for the Marketing Automation Reporting site.
$XP1MarketingAutomationReportingSiteName = "$prefix.mareporting"
# The name for the XConnect site url.
$XP1ClientCertificateName = "$prefix.xconnect_client"
# The name for the XConnect collection site.
$XP1CollectionSitename = "$prefix.collection"
# The name for the search site.
$XP1CollectionSearchSitename = "$prefix.search"
# The name fore the XConnect processing engine service.
$XP1CortexProcessingSitename = "$prefix.processingEngine"
# The name for the XConnect reporting servcice.
$XP1CortexReportingSitename = "$prefix.reporting"
# The random string key used for establishing connection with IdentityService
$ClientSecret = "SIF-Default"

# Service URLs
# The URL for the XConnect Search Service.
$XConnectCollectionSearchService = "https://$XP1CollectionSearchSitename"
# The URL of the XConnect Collection service.
$XConnectCollectionService = "https://$XP1CollectionSitename"
# The URL of the XConnect Reference Data service
$XConnectReferenceDataService = "https://$ReferenceDateSiteName"
# The URL for the processing service.
$ProcessingService = "https://$ProcessingSiteName"
# The URL for the reporting service.
$ReportingService = "https://$ReportingSiteName"
# The URL of the Cortex Reporting Service
$CortexReportingService = "https://$XP1CortexReportingSitename"
# The URL of the Marketing Automaton Service
$MarketingAutomationOperationsService = "https://$XP1MarketingAutomationSiteName"
# The URL of the Marteting Automation Reporting Service
$MarketingAutomationReportingService = "https://$XP1MarketingAutomationReportingSiteName"
# The URL for the Identity Server password recovery, this should be the URL of the CM Instance.
$PasswordRecoveryUrl  = "https://$ContentManagementSiteName"
# The URL of the Identity Authority
$SitecoreIdentityAuthority = "https://$IdentityServerSiteName"
# The URL of the Machine Learning server
$MachineLearningServerUrl = ""
# Pipe-separated list of instances (URIs) that are allowed to login via Sitecore Identity.
$AllowedCorsOrigins = "https://$ContentManagementSiteName"

# Packages
# The path to the Sitecore Content Delivery package.
$SitecoreXP1CDPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_cd.scwdp.zip").FullName
# The path to the Sitecore Content Management package.
$SitecoreXP1CMPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_cm.scwdp.zip").FullName
# The path to the Sitecore Content Reporting package.
$SitecoreXP1RepPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_rep.scwdp.zip").FullName
# The path to the Sitecore Content Processing package.
$SitecoreXP1PrcPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_prc.scwdp.zip").FullName
# The path to the XConnect Collection package.
$XP1CollectionPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1collection.scwdp.zip").FullName
# The path to the XConnect Collection Search package.
$XP1CollectionSearchPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1collectionsearch.scwdp.zip").FullName
# The path to the XConnect Marketing Automation package.
$XP1MarketingAutomationPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1marketingautomation.scwdp.zip").FullName
# The path to the XConnect Marketing Automation Reporting package.
$XP1MarketingAutomationReportingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1marketingautomationreporting.scwdp.zip").FullName
# The path to the XConnect Reference Data package.
$XP1ReferenceDataPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1referencedata.scwdp.zip").FullName
# The path to the XConnect Reporting package.
$XP1CortexReportingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1cortexreporting.scwdp.zip").FullName
# The path to the processing engine package.
$XP1CortexProcessingPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp1cortexprocessing.scwdp.zip").FullName
# The path to the Identity Server package.
$IdentityServerPackage = (Get-ChildItem "$SCInstallRoot\Sitecore.IdentityServer * rev. * (OnPrem)_identityserver.scwdp.zip").FullName

# Install XP1 via combined partials file.
$XP1Parameters = @{
    Path = "$SCInstallRoot\XP1-SingleDeveloper.json"
    CertificateName = $XP1ClientCertificateName
    SitecoreAdminPassword = $SitecoreAdminPassword
    LicenseFile = $LicenseFile
    SolrUrl = $SolrUrl
    SolrRoot = $SolrRoot
    SolrService = $SolrService
    Prefix = $Prefix
    SqlServer = $SqlServer
    SqlAdminUser = $SqlAdminUser
    SqlAdminPassword = $SqlAdminPassword
    IdentityServerCertificateName = $IdentityServerSiteName
    IdentityServerSiteName = $IdentityServerSiteName
    XP1CollectionSearchSitename = $XP1CollectionSearchSitename
    XP1MarketingAutomationSitename = $XP1MarketingAutomationSiteName
    XP1MarketingAutomationReportingSitename = $XP1MarketingAutomationReportingSiteName
    XP1ReferenceDataSitename = $ReferenceDateSiteName
    XP1CortexProcessingSitename = $XP1CortexProcessingSitename
    XP1CortexReportingSitename = $XP1CortexReportingSitename
    XP1CollectionSitename = $XP1CollectionSitename
    SitecoreXP1CDSitename = $ContentDeliverySiteName
    SitecoreXP1CMSitename = $ContentManagementSiteName
    SitecoreXP1RepSitename = $ReportingSiteName
    SitecoreXP1PrcSitename = $ProcessingSiteName
    XConnectCollectionService = $XConnectCollectionService
    XConnectReferenceDataService = $XConnectReferenceDataService
    XConnectCollectionSearchService = $XConnectCollectionSearchService
    MarketingAutomationOperationsService = $MarketingAutomationOperationsService
    MarketingAutomationReportingService = $MarketingAutomationReportingService
    CortexReportingService = $CortexReportingService
    MachineLearningServerUrl = $MachineLearningServerUrl
    SitecoreIdentityAuthority = $SitecoreIdentityAuthority
    ProcessingService = $ProcessingService
    ReportingService = $ReportingService
    XP1CollectionPackage = $XP1CollectionPackage
    XP1CollectionSearchPackage = $XP1CollectionSearchPackage
    XP1CortexProcessingPackage = $XP1CortexProcessingPackage
    XP1MarketingAutomationPackage = $XP1MarketingAutomationPackage
    XP1MarketingAutomationReportingPackage = $XP1MarketingAutomationReportingPackage
    XP1ReferenceDataPackage = $XP1ReferenceDataPackage
    XP1CortexReportingPackage = $XP1CortexReportingPackage
    SitecoreXP1CDPackage = $SitecoreXP1CDPackage
    SitecoreXP1CMPackage = $SitecoreXP1CMPackage
    SitecoreXP1RepPackage = $SitecoreXP1RepPackage
    SitecoreXP1PrcPackage = $SitecoreXP1PrcPackage
    IdentityServerPackage = $IdentityServerPackage
    PasswordRecoveryUrl = $PasswordRecoveryUrl
    ClientSecret = $ClientSecret
    AllowedCorsOrigins = $AllowedCorsOrigins
    SitePhysicalRoot = $SitePhysicalRoot
}

Push-Location $SCInstallRoot

Install-SitecoreConfiguration @XP1Parameters *>&1 | Tee-Object XP1-SingleDeveloper.log

# Uncomment the below line and comment out the above if you want to remove the XP1 SingleDeveloper config.
#Uninstall-SitecoreConfiguration @XP1Parameters *>&1 | Tee-Object XP1-SingleDeveloper-Uninstall.log

Pop-Location

# SIG # Begin signature block
# MIIXwQYJKoZIhvcNAQcCoIIXsjCCF64CAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQU108gAF/+OxPM2KHUzHiN4lAn
# IhSgghL8MIID7jCCA1egAwIBAgIQfpPr+3zGTlnqS5p31Ab8OzANBgkqhkiG9w0B
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
# MAwGCisGAQQBgjcCARUwIwYJKoZIhvcNAQkEMRYEFDWdgQhaZnfutOgPAkuo/rYB
# YmFAMA0GCSqGSIb3DQEBAQUABIIBAHmT2OElmnsj5Xb+BL9faVsAMaA7Sk40ubbz
# Av5omsYKqlz+PW44G0QziPifLqPXx3nWU8ukdAhDRNJHXCXXhQhe8Tlwc0+CjaE9
# w51pjOWgg74WEvxZK4ys+R6ATyScXwjMgFPWZ3DkvGe3zKhs4TJlM/axj5NagGWN
# iaYK2X2m1mFwjtTKLtsbWRtSBh/Uh2d37sX3fmbkJYlovSk+JGgOS1Kksbpuvyw7
# Opo7SWuU8gLnMAPY/eg5Ju3kaHvbC38Fxai3fz8dFA3dBurzAAUY4qZJByQp9MPJ
# WDuidJjn2SyE8EbtFyFINEpN4imzUYDprMmMFk1iiM6luZtULK+hggILMIICBwYJ
# KoZIhvcNAQkGMYIB+DCCAfQCAQEwcjBeMQswCQYDVQQGEwJVUzEdMBsGA1UEChMU
# U3ltYW50ZWMgQ29ycG9yYXRpb24xMDAuBgNVBAMTJ1N5bWFudGVjIFRpbWUgU3Rh
# bXBpbmcgU2VydmljZXMgQ0EgLSBHMgIQDs/0OMj+vzVuBNhqmBsaUDAJBgUrDgMC
# GgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcN
# MTkxMTEzMDg1NTU4WjAjBgkqhkiG9w0BCQQxFgQUsqC3UDgkkR9myl93+5NaBHTE
# EawwDQYJKoZIhvcNAQEBBQAEggEAbrza1YNVmyQa2vo8DTrsiQGMgUCYjKwgoYjk
# VeThRIOxi+G08FrfT68m8GCkdgYQJ0MULcck4uiYa2KA5MexxYCeim+mLSoFm6Mq
# Hys0He1QJ6g+ldi8P2bNP9mlNGcOdjNZyFi0lMgTgLpHxdmhFPvWRYSHxJONkoBU
# Q5/2ho1eFrvR2tQpnT/m9StPutacj223D6NVMEBwjHZmhySQL0hCU8Kzp2AWAI7R
# CjF60Jm/wyZR7jKDqQsRtchM/Fk/BcJ1w2tmeVx5vXuj09Q5yF+1XE/kv2peneQP
# MPq/MHUXBBV+deWiwZbqCJbr0s9pEMvk5AxGq6XrfN+iOPpiHw==
# SIG # End signature block
