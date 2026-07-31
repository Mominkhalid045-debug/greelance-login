Add-Type -AssemblyName System.Drawing

$mediaDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\.tempmediaStorage"
$outDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

# The user uploaded 18 card images in recent prompts. Let's find files around 80000-90000 bytes
$files = Get-ChildItem -Path $mediaDir -Filter "*.png" | Where-Object { $_.Length -gt 75000 -and $_.Length -lt 95000 } | Sort-Object LastWriteTime

Write-Host "Found $($files.Count) user card upload files."

$idx = 0
foreach ($file in $files) {
    $idx++
    try {
        $bmp = New-Object System.Drawing.Bitmap($file.FullName)
        
        # Center card region roughly X: 600..1300, Y: 300..500
        # Let's search for non-background pixels in left 40% of the card area
        $minX = $bmp.Width
        $minY = $bmp.Height
        $maxX = 0
        $maxY = 0
        $found = $false

        # Background color threshold (#F3F7FF or #FFFFFF)
        for ($x = 700; $x -lt 980; $x += 2) {
            for ($y = 350; $y -lt 450; $y += 2) {
                $p = $bmp.GetPixel($x, $y)
                # Check for icon color (R < 235 or G < 235 or B < 240)
                if ($p.R -lt 238 -or $p.G -lt 238 -or $p.B -lt 242) {
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                    $found = $true
                }
            }
        }

        # Fallback search if centered card was at different coordinates
        if (-not $found) {
            for ($x = 600; $x -lt 1100; $x += 2) {
                for ($y = 250; $y -lt 550; $y += 2) {
                    $p = $bmp.GetPixel($x, $y)
                    if ($p.R -lt 238 -or $p.G -lt 238 -or $p.B -lt 242) {
                        if ($x -lt $minX) { $minX = $x }
                        if ($x -gt $maxX) { $maxX = $x }
                        if ($y -lt $minY) { $minY = $y }
                        if ($y -gt $maxY) { $maxY = $y }
                        $found = $true
                    }
                }
            }
        }

        if ($found -and ($maxX - $minX) -gt 10 -and ($maxY - $minY) -gt 10) {
            $pad = 4
            $cropX = [Math]::Max(0, $minX - $pad)
            $cropY = [Math]::Max(0, $minY - $pad)
            $cropW = ($maxX - $minX) + ($pad * 2)
            $cropH = ($maxY - $minY) + ($pad * 2)

            $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
            $g = [System.Drawing.Graphics]::FromImage($cropped)
            $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), (New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
            $g.Dispose()

            # Make background transparent
            for ($cx = 0; $cx -lt $cropW; $cx++) {
                for ($cy = 0; $cy -lt $cropH; $cy++) {
                    $cp = $cropped.GetPixel($cx, $cy)
                    if ($cp.R -gt 240 -and $cp.G -gt 242 -and $cp.B -gt 245) {
                        $cropped.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
                    }
                }
            }

            $outPath = Join-Path $outDir "user_icon_$idx.png"
            $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
            $cropped.Dispose()
            Write-Host "Cropped Icon $idx from $($file.Name): ${cropW}x${cropH} at ($cropX, $cropY)"
        } else {
            Write-Host "Could not find icon bounds in $($file.Name)"
        }

        $bmp.Dispose()
    } catch {
        Write-Host "Error processing $($file.Name): $_"
    }
}
