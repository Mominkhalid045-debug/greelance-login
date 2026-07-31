Add-Type -AssemblyName System.Drawing

$mediaDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\.tempmediaStorage"
$files = Get-ChildItem -Path $mediaDir -Filter "*.png" | Sort-Object LastWriteTime

foreach ($f in $files) {
    $bmp = New-Object System.Drawing.Bitmap($f.FullName)
    Write-Host "$($f.Name) | W:$($bmp.Width) H:$($bmp.Height) | Size: $($f.Length)"
    $bmp.Dispose()
}
