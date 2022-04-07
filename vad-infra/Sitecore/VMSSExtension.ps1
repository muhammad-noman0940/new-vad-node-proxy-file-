 #Add-AzVmssExtension -VirtualMachineScaleSet GoldenImage
#$Settings = @{"fileUris" = "https://test123script.blob.core.windows.net/2ndtry/CustomScript(1).ps1?sp=r&st=2020-06-18T11:25:51Z&se=2020-12-30T19:25:51Z&spr=https&sv=2019-10-10&sr=b&sig=SKCtHRr%2B2mFk%2BRMMwf7M%2BWp2y%2BMDEyVQcLF8dQ4cw1g%3D"};
$VMSS=Get-AzVmss -VMScaleSetName ScaleSet1
$VMSSName = 'FinalTest6'
$fileUri = @("https://test123script.blob.core.windows.net/2ndtry/WrapperScript.ps1")
$settings=@{ "fileUris"=$fileUri;
"commandToExecute" = "PowerShell -ExecutionPolicy Unrestricted -File WrapperScript.ps1 CM PROD";
"managedIdentity" : {}
}


Add-AzVmssExtension -VirtualMachineScaleSet $VMSS -Name 'WrapperScript' -Publisher 'Microsoft.Compute'  -Type 'CustomScriptExtension' -TypeHandlerVersion 1.9 -AutoUpgradeMinorVersion $True -Setting $Settings
Update-AzVmss -ResourceGroupName VMSSGroup -Name $VMSSName -VirtualMachineScaleSet $vmss
