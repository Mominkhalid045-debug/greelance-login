Add-Type -AssemblyName System.Drawing

$inDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7"
$outDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$batch2 = @(
    @{ file = "media__1785482135961.png"; slug = "data_center_security"; name = "Data Center security" },
    @{ file = "media__1785482135967.png"; slug = "decision_intelligence"; name = "Decision Intelligence" },
    @{ file = "media__1785482136022.png"; slug = "business_intelligence"; name = "Business Intelligence" },
    @{ file = "media__1785482136031.png"; slug = "artificial_intelligence"; name = "Artificial Intelligence" },
    @{ file = "media__1785482136036.png"; slug = "it_staffing"; name = "IT Staffing" }
)

foreach ($item in $batch2) {
    $filePath = Join-Path $inDir $item.file
    if (Test-Path $filePath) {
        $bmp = New-Object System.Drawing.Bitmap($filePath)

        # Search bounds between X=18 and X=65, Y=6 and Y=50
        $minX = 65
        $minY = 50
        $maxX = 18
        $maxY = 6
        $found = $false

        for ($x = 18; $x -le 65; $x++) {
            for ($y = 6; $y -le 50; $y++) {
                $p = $bmp.GetPixel($x, $y)
                # Check for non-background pixel (R < 232 or G < 232 or B < 240)
                if ($p.R -lt 232 -or $p.G -lt 232 -or $p.B -lt 240) {
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                    $found = $true
                }
            }
        }

        if ($found -and ($maxX - $minX) -ge 4) {
            $cropX = [Math]::Max(0, $minX - 1)
            $cropY = [Math]::Max(0, $minY - 1)
            $cropW = ($maxX - $minX) + 3
            $cropH = ($maxY - $minY) + 3

            $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
            $g = [System.Drawing.Graphics]::FromImage($cropped)
            $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), (New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
            $g.Dispose()

            # Make background transparent
            for ($cx = 0; $cx -lt $cropW; $cx++) {
                for ($cy = 0; $cy -lt $cropH; $cy++) {
                    $cp = $cropped.GetPixel($cx, $cy)
                    if ($cp.R -gt 235 -and $cp.G -gt 238 -and $cp.B -gt 242) {
                        $cropped.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
                    }
                }
            }

            $outName = "$($item.slug).png"
            $outPath = Join-Path $outDir $outName
            $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
            $cropped.Dispose()
            Write-Host "UPDATED BATCH 2 ICON: $($item.name) -> $outName (${cropW}x${cropH} at X:$cropX Y:$cropY)"
        } else {
            Write-Host "Warning: Icon pixels not found in range for $($item.name)"
        }
        $bmp.Dispose()
    }
}
