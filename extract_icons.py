import os
from PIL import Image

MEDIA_DIR = r'C:\Users\HTC\.gemini\antigravity\brain\a360b946-e3e3-447c-bd63-921f4d0636dd\.tempmediaStorage'
OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

os.makedirs(OUT_DIR, exist_ok=True)

img_path = os.path.join(MEDIA_DIR, 'media_a360b946-e3e3-447c-bd63-921f4d0636dd_1785476839293.png')
im = Image.open(img_path)

# 23 Category names in exact order of the 4 rows:
# Row 1 (5 items):
row1_names = ["E Commerce Skills", "Cybersecurity Engineer", "Cloud Computing Engineer", "Digital Marketing Expert", "Software Engineering"]
# Row 2 (6 items):
row2_names = ["IT Staffing", "Data Center security", "Artificial Intelligence", "Business Intelligence", "Decision Intelligence", "Robotics"]
# Row 3 (6 items):
row3_names = ["Virtual/Augmented", "Systems Engineering", "Cryptocurrency", "Fintech", "Autonomous Systems", "Machine Learning"]
# Row 4 (6 items):
row4_names = ["Electric-Vehicle Technology", "Internet of Things", "Recycle-Energy", "Smart-Home", "Quantum Computing", "Blockchain"]

# In 1920x1076 image, the card area is roughly x: 250 to 1420
# Let's crop the grid section to inspect exact bounds
grid_crop = im.crop((230, 300, 1450, 600))
grid_crop.save(os.path.join(OUT_DIR, 'grid_crop_test.png'))
print("Saved grid_crop_test.png")
