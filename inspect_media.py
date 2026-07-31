import os, glob, sys
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

os.makedirs(OUT_DIR, exist_ok=True)

files = glob.glob(os.path.join(MEDIA_DIR, 'media_*.png'))
print(f"Total media files: {len(files)}")

# Sort by size or timestamp
files.sort(key=os.path.getmtime)

for f in files:
    try:
        im = Image.open(f)
        w, h = im.size
        # Print file info
        basename = os.path.basename(f)
        print(f"{basename}: {w}x{h}, mtime={os.path.getmtime(f)}")
    except Exception as e:
        pass
