Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\.tempmediaStorage"
$files = Get-ChildItem -Path $dir -Filter "*.png"

foreach ($file in $files) {
    if ($file.Length -lt 100000 -and $file.Length -gt 70000) {
        $bmp = New-Object System.Drawing.Bitmap($file.FullName)
        Write-Host "$($file.Name) : $($bmp.Width) x $($bmp.Height)"
        $bmp.Dispose()
    }
}
