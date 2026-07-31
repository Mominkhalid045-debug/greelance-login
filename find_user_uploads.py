import os, glob
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'

files = glob.glob(os.path.join(MEDIA_DIR, 'media_*.png'))

# Filter files uploaded during user's 5-by-5 batches (mtime between 1785474800 and 1785475600)
user_uploads = [f for f in files if 1785474800 <= os.path.getmtime(f) <= 1785475600]

print(f"User uploaded batch files count: {len(user_uploads)}")

for f in sorted(user_uploads, key=os.path.getmtime):
    im = Image.open(f)
    print(f"{os.path.basename(f)}: size={im.size}, mtime={os.path.getmtime(f)}")
