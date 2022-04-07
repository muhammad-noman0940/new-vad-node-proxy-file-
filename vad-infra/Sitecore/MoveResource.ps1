$TimeoutAfter = New-TimeSpan -Minutes 5
$WaitBetweenPolling = New-TimeSpan -Seconds 10

# Launch external process
Invoke-RestMethod 

$Timeout = (Get-Date).Add($TimeoutAfter)
do
{
    # Poll external process to see if it is done
    $Result = Invoke-RestMethod 
    Start-Sleep -Seconds $WaitBetweenPolling.Seconds
}
while (($Result -eq "IN_PROGRESS") -and ((Get-Date) -lt $Timeout))

if ($Result -ne "SUCCESS")
{
    exit 1
}