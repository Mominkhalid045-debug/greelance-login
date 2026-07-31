Add-Type -AssemblyName System.Drawing

$inDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7"
$outDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$mapping = @(
    @{ file = "media__1785480324634.png"; slug = "it_staffing"; name = "IT Staffing" },
    @{ file = "media__1785480324693.png"; slug = "software_engineering"; name = "Software Engineering" },
    @{ file = "media__1785480324714.png"; slug = "digital_marketing_expert"; name = "Digital Marketing Expert" },
    @{ file = "media__1785480324725.png"; slug = "cloud_computing_engineer"; name = "Cloud Computing Engineer" },
    @{ file = "media__1785480324744.png"; slug = "cybersecurity_engineer"; name = "Cybersecurity Engineer" },
    @{ file = "media__1785480379533.png"; slug = "decision_intelligence"; name = "Decision Intelligence" },
    @{ file = "media__1785480379541.png"; slug = "data_center_security"; name = "Data Center security" },
    @{ file = "media__1785480379549.png"; slug = "business_intelligence"; name = "Business Intelligence" },
    @{ file = "media__1785480379617.png"; slug = "e_commerce_skills"; name = "E Commerce Skills" },
    @{ file = "media__1785480379626.png"; slug = "artificial_intelligence"; name = "Artificial Intelligence" },
    @{ file = "media__1785480425146.png"; slug = "fintech"; name = "Fintech" },
    @{ file = "media__1785480425180.png"; slug = "robotics"; name = "Robotics" },
    @{ file = "media__1785480425194.png"; slug = "systems_engineering"; name = "Systems Engineering" },
    @{ file = "media__1785480425201.png"; slug = "virtual_augmented"; name = "Virtual/Augmented" },
    @{ file = "media__1785480425254.png"; slug = "cryptocurrency"; name = "Cryptocurrency" },
    @{ file = "media__1785480448358.png"; slug = "recycle_energy"; name = "Recycle-Energy" },
    @{ file = "media__1785480448366.png"; slug = "internet_of_things"; name = "Internet of Things" },
    @{ file = "media__1785480448376.png"; slug = "electric_vehicle_technology"; name = "Electric-Vehicle Technology" },
    @{ file = "media__1785480448385.png"; slug = "machine_learning"; name = "Machine Learning" },
    @{ file = "media__1785480448430.png"; slug = "autonomous_systems"; name = "Autonomous Systems" },
    @{ file = "media__1785480492243.png"; slug = "smart_home"; name = "Smart-Home" },
    @{ file = "media__1785480492253.png"; slug = "blockchain"; name = "Blockchain" },
    @{ file = "media__1785480492265.png"; slug = "quantum_computing"; name = "Quantum Computing" }
)

foreach ($item in $mapping) {
    $filePath = Join-Path $inDir $item.file
    if (Test-Path $filePath) {
        $bmp = New-Object System.Drawing.Bitmap($filePath)

        # Search specifically between X=16 and X=55, Y=12 and Y=44 for icon pixels
        $minX = 55
        $minY = 44
        $maxX = 16
        $maxY = 12
        $found = $false

        for ($x = 16; $x -le 55; $x++) {
            for ($y = 12; $y -le 44; $y++) {
                $p = $bmp.GetPixel($x, $y)
                # Check for non-background pixel (R < 225 or G < 225 or B < 235)
                if ($p.R -lt 228 -or $p.G -lt 228 -or $p.B -lt 238) {
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                    $found = $true
                }
            }
        }

        if ($found -and ($maxX - $minX) -ge 4) {
            $cropX = [Math]::Max(0, $minX)
            $cropY = [Math]::Max(0, $minY)
            $cropW = ($maxX - $minX) + 1
            $cropH = ($maxY - $minY) + 1

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
            Write-Host "CROPPED CLEAN 3D LOGO: $($item.name) -> $outName (${cropW}x${cropH} at X:$cropX Y:$cropY)"
        } else {
            Write-Host "Warning: No icon pixels found in range for $($item.name)"
        }
        $bmp.Dispose()
    }
}
