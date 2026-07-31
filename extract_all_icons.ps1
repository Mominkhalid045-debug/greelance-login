Add-Type -AssemblyName System.Drawing

$mediaDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7\.tempmediaStorage"
$outDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$files = Get-ChildItem -Path $mediaDir -Filter "*.png" | Sort-Object CreationTime

Write-Host "Total PNG files to scan: $($files.Count)"

foreach ($file in $files) {
    try {
        $bmp = New-Object System.Drawing.Bitmap($file.FullName)
        
        # We only care about images that contain card screenshots
        if ($bmp.Width -ge 300 -and $bmp.Height -ge 100) {
            # Find bounds of icon pixels on left half of image (x < Width * 0.45)
            $minX = $bmp.Width
            $minY = $bmp.Height
            $maxX = 0
            $maxY = 0
            $found = $false

            # Sample every 2 pixels for performance
            for ($x = 10; $x -lt ($bmp.Width * 0.45); $x += 2) {
                for ($y = 10; $y -lt ($bmp.Height - 10); $y += 2) {
                    $pixel = $bmp.GetPixel($x, $y)
                    
                    # Background is light (#F3F7FF or #FFFFFF or #F7FAFF)
                    # Check if pixel has distinct color (R < 235 or G < 235 or B < 245)
                    if ($pixel.R -lt 238 -or $pixel.G -lt 238 -or $pixel.B -lt 242) {
                        if ($x -lt $minX) { $minX = $x }
                        if ($x -gt $maxX) { $maxX = $x }
                        if ($y -lt $minY) { $minY = $y }
                        if ($y -gt $maxY) { $maxY = $y }
                        $found = $true
                    }
                }
            }

            if ($found -and ($maxX - $minX) -gt 15 -and ($maxY - $minY) -gt 15) {
                # Add padding
                $pad = 6
                $cropX = [Math]::Max(0, $minX - $pad)
                $cropY = [Math]::Max(0, $minY - $pad)
                $cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX) + ($pad * 2))
                $cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY) + ($pad * 2))

                # Create cropped bitmap with alpha transparency
                $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
                $g = [System.Drawing.Graphics]::FromImage($cropped)
                $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), (New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
                $g.Dispose()

                # Make background pixels transparent
                for ($cx = 0; $cx -lt $cropW; $cx++) {
                    for ($cy = 0; $cy -lt $cropH; $cy++) {
                        $cp = $cropped.GetPixel($cx, $cy)
                        # If pixel is very close to background color (#F3F7FF / #FFFFFF / #F7FAFF / #EBF0FF)
                        if ($cp.R -gt 240 -and $cp.G -gt 242 -and $cp.B -gt 248) {
                            $cropped.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
                        }
                    }
                }

                $outName = "$($file.BaseName)_icon.png"
                $outPath = Join-Path $outDir $outName
                $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
                $cropped.Dispose()

                Write-Host "Extracted Icon: $outName (Size: ${cropW}x${cropH} at X:$cropX Y:$cropY)"
            }
        }
        $bmp.Dispose()
    } catch {
        Write-Host "Error processing $($file.Name): $_"
    }
}
