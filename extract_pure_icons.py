import os
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

img_path = os.path.join(MEDIA_DIR, 'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785474828126.png')
im = Image.open(img_path)

# In 1925x1260 image, the category section is:
# Y bounds of 4 rows:
# Row 1: y ~ 320 to 375
# Row 2: y ~ 395 to 450
# Row 3: y ~ 470 to 525
# Row 4: y ~ 545 to 600

rows_y = [
    (324, 372),
    (399, 447),
    (474, 522),
    (549, 597)
]

categories_in_rows = [
    ["E Commerce Skills", "Cybersecurity Engineer", "Cloud Computing Engineer", "Digital Marketing Expert", "Software Engineering"],
    ["IT Staffing", "Data Center security", "Artificial Intelligence", "Business Intelligence", "Decision Intelligence", "Robotics"],
    ["Virtual/Augmented", "Systems Engineering", "Cryptocurrency", "Fintech", "Autonomous Systems", "Machine Learning"],
    ["Electric-Vehicle Technology", "Internet of Things", "Recycle-Energy", "Smart-Home", "Quantum Computing", "Blockchain"]
]

# Let's auto-detect card left edges by scanning pixel colors in each row!
def get_card_left_edges(y_start, y_end, n_expected):
    y_mid = (y_start + y_end) // 2
    edges = []
    in_card = False
    for x in range(50, 1400):
        r, g, b, a = im.getpixel((x, y_mid))
        # Card background in Figma screenshot is light blue/purple (#F3F7FF -> r~240..248, g~245..250, b~255)
        # Border is #E0E2FE (r~220..230, g~225..235, b~254)
        is_card = (r > 230 and g > 235 and b > 250) or (r < 210 and b > 230) # icon or card
        if is_card and not in_card:
            edges.append(x)
            in_card = True
        elif not is_card and in_card:
            in_card = False
    return edges

for r_idx, (y1, y2) in enumerate(rows_y):
    names = categories_in_rows[r_idx]
    # For Row 0 (5 items):
    if len(names) == 5:
        # Card X centers roughly: 85, 345, 605, 865, 1125 in the 1925 width
        # Let's crop precise icon boxes:
        card_xs = [80, 345, 605, 865, 1125]
    else:
        card_xs = [80, 295, 510, 725, 940, 1155]
        
    for c_idx, name in enumerate(names):
        # We know icon is at left of card: x_start + 12 to x_start + 44
        # Let's scan from card_xs[c_idx] to find exact icon pixels
        cx = card_xs[c_idx]
        icon_box = (cx + 12, y1 + 6, cx + 46, y2 - 6)
        
        icon_crop = im.crop(icon_box).convert("RGBA")
        
        # Remove background (card light blue/white bg)
        datas = icon_crop.getdata()
        new_data = []
        for item in datas:
            r, g, b, a = item
            # If light card background color (#F3F7FF or white)
            if r > 230 and g > 235 and b > 248:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append((r, g, b, a))
        icon_crop.putdata(new_data)
        
        safe_name = name.lower().replace(' ', '_').replace('/', '_').replace('-', '_')
        filename = f"{safe_name}.png"
        filepath = os.path.join(OUT_DIR, filename)
        icon_crop.save(filepath, 'PNG')
        print(f"Extracted icon for {name} -> {filename}")

print("Successfully extracted all clean pure icons!")
