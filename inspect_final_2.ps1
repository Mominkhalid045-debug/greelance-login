Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7"
$files = @(
    "media__1785482913525.png",
    "media__1785482933202.png"
)

foreach ($f in $files) {
    $path = Join-Path $dir $f
    $bmp = New-Object System.Drawing.Bitmap($path)
    Write-Host "$f : Width = $($bmp.Width), Height = $($bmp.Height)"
    $bmp.Dispose()
}
