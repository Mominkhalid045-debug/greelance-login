Add-Type -AssemblyName System.Drawing

$inDir = "C:\Users\HTC\.gemini\antigravity\brain\4cc5e058-c303-4634-a329-d9064b83abe7"
$outDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$mapping = @(
    @{ file = "media__1785480324634.png"; name = "IT Staffing"; slug = "it_staffing" },
    @{ file = "media__1785480324693.png"; name = "Software Engineering"; slug = "software_engineering" },
    @{ file = "media__1785480324714.png"; name = "Digital Marketing Expert"; slug = "digital_marketing_expert" },
    @{ file = "media__1785480324725.png"; name = "Cloud Computing Engineer"; slug = "cloud_computing_engineer" },
    @{ file = "media__1785480324744.png"; name = "Cybersecurity Engineer"; slug = "cybersecurity_engineer" },
    @{ file = "media__1785480379533.png"; name = "Decision Intelligence"; slug = "decision_intelligence" },
    @{ file = "media__1785480379541.png"; name = "Data Center security"; slug = "data_center_security" },
    @{ file = "media__1785480379549.png"; name = "Business Intelligence"; slug = "business_intelligence" },
    @{ file = "media__1785480379617.png"; name = "E Commerce Skills"; slug = "e_commerce_skills" }, # fallback mapping
    @{ file = "media__1785480379626.png"; name = "Artificial Intelligence"; slug = "artificial_intelligence" },
    @{ file = "media__1785480425146.png"; name = "Fintech"; slug = "fintech" },
    @{ file = "media__1785480425180.png"; name = "Robotics"; slug = "robotics" },
    @{ file = "media__1785480425194.png"; name = "Systems Engineering"; slug = "systems_engineering" },
    @{ file = "media__1785480425201.png"; name = "Virtual/Augmented"; slug = "virtual_augmented" },
    @{ file = "media__1785480425254.png"; name = "Cryptocurrency"; slug = "cryptocurrency" },
    @{ file = "media__1785480448358.png"; name = "Recycle-Energy"; slug = "recycle_energy" },
    @{ file = "media__1785480448366.png"; name = "Internet of Things"; slug = "internet_of_things" },
    @{ file = "media__1785480448376.png"; name = "Electric-Vehicle Technology"; slug = "electric_vehicle_technology" },
    @{ file = "media__1785480448385.png"; name = "Machine Learning"; slug = "machine_learning" },
    @{ file = "media__1785480448430.png"; name = "Autonomous Systems"; slug = "autonomous_systems" },
    @{ file = "media__1785480492243.png"; name = "Smart-Home"; slug = "smart_home" },
    @{ file = "media__1785480492253.png"; name = "Blockchain"; slug = "blockchain" },
    @{ file = "media__1785480492265.png"; name = "Quantum Computing"; slug = "quantum_computing" }
)

foreach ($item in $mapping) {
    $filePath = Join-Path $inDir $item.file
    if (Test-Path $filePath) {
        $bmp = New-Object System.Drawing.Bitmap($filePath)
        
        # Scan icon bounds inside card (x from 10 to 75, y from 5 to 50)
        $minX = $bmp.Width
        $minY = $bmp.Height
        $maxX = 0
        $maxY = 0
        $found = $false

        for ($x = 4; $x -lt [Math]::Min(75, $bmp.Width); $x++) {
            for ($y = 4; $y -lt ($bmp.Height - 4); $y++) {
                $p = $bmp.GetPixel($x, $y)
                # Check for icon pixel (R < 235 or G < 235 or B < 240)
                if ($p.R -lt 238 -or $p.G -lt 238 -or $p.B -lt 242) {
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                    $found = $true
                }
            }
        }

        if ($found -and ($maxX - $minX) -gt 8) {
            $pad = 2
            $cropX = [Math]::Max(0, $minX - $pad)
            $cropY = [Math]::Max(0, $minY - $pad)
            $cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX) + ($pad * 2))
            $cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY) + ($pad * 2))

            $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
            $g = [System.Drawing.Graphics]::FromImage($cropped)
            $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), (New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
            $g.Dispose()

            # Make card background transparent (#F3F7FF / #FFFFFF / #EBF0FF)
            for ($cx = 0; $cx -lt $cropW; $cx++) {
                for ($cy = 0; $cy -lt $cropH; $cy++) {
                    $cp = $cropped.GetPixel($cx, $cy)
                    if ($cp.R -gt 238 -and $cp.G -gt 240 -and $cp.B -gt 245) {
                        $cropped.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
                    }
                }
            }

            $outName = "$($item.slug).png"
            $outPath = Join-Path $outDir $outName
            $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
            $cropped.Dispose()
            Write-Host "Processed User Icon: $($item.name) -> $outName (${cropW}x${cropH})"
        }
        $bmp.Dispose()
    } else {
        Write-Host "Missing file: $($item.file)"
    }
}
