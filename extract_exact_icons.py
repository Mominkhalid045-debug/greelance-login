import os, json
from PIL import Image, ImageOps

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

img_path = os.path.join(MEDIA_DIR, 'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785476839293.png')
im = Image.open(img_path)
w, h = im.size

# Row Y centers in the full 1920x1076 image:
# Let's define the 4 rows:
rows = [
    # (y_top, y_bottom, names)
    (312, 362, ["E Commerce Skills", "Cybersecurity Engineer", "Cloud Computing Engineer", "Digital Marketing Expert", "Software Engineering"]),
    (384, 434, ["IT Staffing", "Data Center security", "Artificial Intelligence", "Business Intelligence", "Decision Intelligence", "Robotics"]),
    (456, 506, ["Virtual/Augmented", "Systems Engineering", "Cryptocurrency", "Fintech", "Autonomous Systems", "Machine Learning"]),
    (528, 578, ["Electric-Vehicle Technology", "Internet of Things", "Recycle-Energy", "Smart-Home", "Quantum Computing", "Blockchain"])
]

# In Row 1 (5 items), X bounds are roughly:
# Item 0: 250..420
# Item 1: 435..605
# Item 2: 620..790
# Item 3: 805..975
# Item 4: 990..1160

# In Rows 2,3,4 (6 items), X bounds are roughly:
# Item 0: 250..395
# Item 1: 410..555
# Item 2: 570..715
# Item 3: 730..875
# Item 4: 890..1035
# Item 5: 1050..1195

extracted_paths = {}

for r_idx, (y1, y2, names) in enumerate(rows):
    n_cols = len(names)
    if n_cols == 5:
        x_step = (1180 - 245) / 5.0
        x_offsets = [245 + i * x_step for i in range(5)]
    else:
        x_step = (1210 - 245) / 6.0
        x_offsets = [245 + i * x_step for i in range(6)]
    
    for c_idx, name in enumerate(names):
        x_start = int(x_offsets[c_idx])
        # Icon is on the left side of the card, roughly x_start + 10 to x_start + 45
        icon_box = (x_start + 6, y1 + 5, x_start + 44, y2 - 5)
        icon_crop = im.crop(icon_box)
        
        # Save icon PNG
        safe_name = name.lower().replace(' ', '_').replace('/', '_').replace('-', '_')
        filename = f"{safe_name}.png"
        filepath = os.path.join(OUT_DIR, filename)
        
        # Clean up background to be transparent or clean
        # Let's save high res icon crop
        icon_crop.save(filepath, 'PNG')
        extracted_paths[name] = f"/src/assets/category_icons/{filename}"
        print(f"Cropped {name} -> {filename} box={icon_box}")

print(f"\nExtracted all {len(extracted_paths)} icons successfully!")
