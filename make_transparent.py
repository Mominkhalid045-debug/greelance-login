import os, glob
from PIL import Image

OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

pngs = glob.glob(os.path.join(OUT_DIR, '*.png'))

for p in pngs:
    im = Image.open(p).convert("RGBA")
    datas = im.getdata()
    
    new_data = []
    for item in datas:
        # Check if color is close to white / light card bg (#F0F4FF or similar background in screenshot)
        r, g, b, a = item
        # If background color (light grey/blue fill of card)
        if r > 235 and g > 240 and b > 250:
            new_data.append((255, 255, 255, 0)) # make transparent
        else:
            new_data.append((r, g, b, a))
            
    im.putdata(new_data)
    im.save(p, "PNG")

print("Refined background transparency for all cropped PNG icons!")
