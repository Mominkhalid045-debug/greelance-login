import re
import os

with open(r'C:\Users\HTC\.gemini\antigravity\scratch\bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

# Match all base64 images
matches = re.findall(r'([A-Za-z0-9_$]+)=\s*[`"\'](data:image/png;base64,[^`"\']+)[`"\']', bundle)
img_map = dict(matches)
print(f"Extracted {len(img_map)} base64 images!")

# Find array containing "Sales & Marketing" or "Development & IT" or "E Commerce"
pos = bundle.find('E Commerce')
print('E Commerce at:', pos)

# Find array start before "E Commerce"
arr_start = bundle.rfind('[', 0, pos)
print('arr_start:', arr_start)

# Find array end after "E Commerce"
arr_end = bundle.find(']', pos) + 1
# Keep expanding until we get all 23 elements
while arr_end < len(bundle):
    chunk = bundle[arr_start:arr_end]
    if chunk.count('id:') >= 22:
        break
    arr_end = bundle.find(']', arr_end) + 1

cat_array_str = bundle[arr_start:arr_end]
print('Category array string length:', len(cat_array_str))
print('Total id: occurrences:', cat_array_str.count('id:'))

# Replace image variable references like img:Pe with img:"data:image/png;base64..."
for var_name, base64_str in img_map.items():
    cat_array_str = re.sub(r'\bimg\s*:\s*' + re.escape(var_name) + r'\b', f'img:"{base64_str}"', cat_array_str)

os.makedirs(r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\data', exist_ok=True)

with open(r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\data\categoryData.js', 'w', encoding='utf-8') as out:
    out.write('export const CATEGORIES = ' + cat_array_str + ';\n')

print("Successfully generated src/data/categoryData.js!")
