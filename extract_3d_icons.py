import os, glob, json, base64
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'

files = glob.glob(os.path.join(MEDIA_DIR, '*.png'))
print(f"Total media files found: {len(files)}")

# Inspect image sizes and find images that contain category cards
images_info = []
for f in files:
    try:
        im = Image.open(f)
        w, h = im.size
        # Filter for category screenshots (which have small dimensions like 200-300px width/height, or specific crops)
        images_info.append((f, w, h))
    except Exception as e:
        pass

for f, w, h in sorted(images_info, key=lambda x: x[1]):
    print(f"{os.path.basename(f)}: {w}x{h}")
