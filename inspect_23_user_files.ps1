Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7"
$files = Get-ChildItem -Path $dir -Filter "media__1785480*.png" | Sort-Object CreationTime

Write-Host "Found $($files.Count) exact user uploaded media assets:"
$i = 0
foreach ($f in $files) {
    $i++
    $bmp = New-Object System.Drawing.Bitmap($f.FullName)
    Write-Host "$i | $($f.Name) | W:$($bmp.Width) H:$($bmp.Height) | Size:$($f.Length)"
    $bmp.Dispose()
}
