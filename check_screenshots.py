import os
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

os.makedirs(OUT_DIR, exist_ok=True)

# High res Figma screenshots sent by user
figma_screenshots = [
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785474828126.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785474948865.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785474996230.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785475218435.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785475353463.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785476839293.png',
    'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785477089739.png'
]

for s in figma_screenshots:
    path = os.path.join(MEDIA_DIR, s)
    if os.path.exists(path):
        im = Image.open(path)
        print(f"Found {s}: size={im.size}")
