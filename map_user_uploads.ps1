Add-Type -AssemblyName System.Drawing

$mediaDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\.tempmediaStorage"
$files = Get-ChildItem -Path $mediaDir -Filter "media_*.png" | Sort-Object CreationTime

Write-Host "Found $($files.Count) media files in chronological order:"
$i = 0
foreach ($f in $files) {
    $i++
    $bmp = New-Object System.Drawing.Bitmap($f.FullName)
    Write-Host "$i | $($f.Name) | W:$($bmp.Width) H:$($bmp.Height) | Size: $($f.Length) | Time: $($f.CreationTime)"
    $bmp.Dispose()
}
