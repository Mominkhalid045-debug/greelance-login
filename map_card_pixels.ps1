Add-Type -AssemblyName System.Drawing

$file = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\media__1785480324634.png"
$bmp = New-Object System.Drawing.Bitmap($file)

Write-Host "Image Size: $($bmp.Width) x $($bmp.Height)"

for ($y = 10; $y -lt 45; $y += 5) {
    $line = "Y=$y : "
    for ($x = 5; $x -lt 60; $x += 3) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 200 -or $p.G -lt 200 -or $p.B -lt 230) {
            $line += "*"
        } else {
            $line += "."
        }
    }
    Write-Host $line
}
$bmp.Dispose()
