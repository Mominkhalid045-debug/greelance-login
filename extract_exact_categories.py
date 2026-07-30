import re
import json

with open(r'C:\Users\HTC\.gemini\antigravity\scratch\bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

# Match all image variable declarations: var Pe=`data:image/png;base64...` or Pe=`data:...`
var_matches = re.findall(r'([A-Za-z0-9_$]+)=[`"\'](data:image/png;base64,[^`"\']+)[`"\']', bundle)
img_map = dict(var_matches)
print(f"Extracted {len(img_map)} base64 images!")

# Search for category lists in bundle.js
# Look for rt={...} or "E Commerce Skills":Pe
pos = bundle.find('"E Commerce Skills":')
print('Position of "E Commerce Skills":', pos)

if pos != -1:
    # Find the object start `{` before pos
    obj_start = bundle.rfind('{', 0, pos)
    obj_end = bundle.find('}', pos) + 1
    rt_str = bundle[obj_start:obj_end]
    print('Found rt object string of length:', len(rt_str))

    # Parse key-value pairs from rt_str
    # format: "E Commerce Skills":Pe,"Cybersecurity Engineer":Fe,...
    pairs = re.findall(r'["\']?([^"\':]+)["\']?\s*:\s*([A-Za-z0-9_$]+)', rt_str)
    print(f"Found {len(pairs)} category-to-image pairs!")

    categories = []
    for idx, (cat_name, var_name) in enumerate(pairs):
        cat_name = cat_name.strip()
        img_data = img_map.get(var_name, '')
        categories.append({
            "id": idx + 1,
            "name": cat_name,
            "img": img_data
        })

    # Write as exported JS module in src/data/categoryData.js
    with open(r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\data\categoryData.js', 'w', encoding='utf-8') as out:
        out.write('export const CATEGORIES = ' + json.dumps(categories, indent=2) + ';\n')
    print("Successfully created src/data/categoryData.js with 23 category logos!")

