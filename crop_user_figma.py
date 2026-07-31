import os
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

img_path = os.path.join(MEDIA_DIR, 'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785474828126.png')
im = Image.open(img_path)
w, h = im.size
print(f"User original high-res Figma image size: {w}x{h}")

# Let's save a crop of the category area (y: 180 to 700, x: 50 to 1400)
cat_crop = im.crop((50, 180, 1400, 700))
cat_crop.save(os.path.join(OUT_DIR, 'user_figma_crop_full.png'))
print("Saved user_figma_crop_full.png")
