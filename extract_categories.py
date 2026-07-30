import re
import json

with open(r'C:\Users\HTC\.gemini\antigravity\scratch\bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

# 1. Find all base64 variable declarations: var Pe="data:image/png;base64,...", Fe=...
var_matches = re.findall(r'var\s+([A-Za-z0-9_$]+)=["\'](data:image/[^"\']+)["\']', bundle)
img_map = dict(var_matches)
print(f"Found {len(img_map)} base64 images in bundle!")

# Also check for declarations like: const Pe="data:image..." or Pe="data:image..."
var_matches2 = re.findall(r'([A-Za-z0-9_$]+)=["\'](data:image/png;base64,[^"\']+)["\']', bundle)
for k, v in var_matches2:
    img_map[k] = v

print(f"Total img_map entries: {len(img_map)}")

# 2. Extract categories array from bundle
# Search for array starting with [{id:1,name:
match = re.search(r'\[\s*\{\s*id\s*:\s*1\s*,\s*name\s*:\s*["\'][^"\']+["\'].*?\]\]', bundle, re.DOTALL)
if not match:
    match = re.search(r'\[\s*\{\s*id\s*:\s*1\s*,\s*name\s*:[^\]]+\]', bundle, re.DOTALL)

if match:
    cat_str = match.group(0)
    print("Found categories string of length:", len(cat_str))
    
    # Replace image variable references like img:Pe with img:"data:image/png;base64..."
    for var_name, base64_str in img_map.items():
        cat_str = re.sub(r'\bimg\s*:\s*' + re.escape(var_name) + r'\b', f'img:"{base64_str}"', cat_str)
    
    # Write to src/data/categoryData.js
    with open(r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\data\categoryData.js', 'w', encoding='utf-8') as out:
        out.write('export const CATEGORIES = ' + cat_str + ';\n')
    print("Successfully generated src/data/categoryData.js!")
else:
    print("Could not locate categories array via regex, writing fallback inspector...")
    # Print near 302207
    start = max(0, 302207 - 500)
    end = min(len(bundle), 302207 + 5000)
    print(bundle[start:end])
