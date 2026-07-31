$iconDir = "c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons"
$files = Get-ChildItem -Path $iconDir -Filter "*.png"
foreach ($f in $files) {
    if ($f.Name -match "^media_" -or $f.Name -match "^user_icon_" -or $f.Name -match "^grid_crop" -or $f.Name -match "^user_figma") {
        Remove-Item $f.FullName -Force
        Write-Host "Deleted: $($f.Name)"
    }
}
Write-Host "Cleanup complete"
