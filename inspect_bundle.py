with open(r'C:\Users\HTC\.gemini\antigravity\scratch\bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

pos = bundle.find('data:image/png;base64')
print('First data:image/png;base64 at pos:', pos)
if pos != -1:
    print(bundle[pos-50:pos+150])

# Search for "Retail Media" or "E Commerce" or category names
for cat in ["Retail Media", "Programmatic", "Product Design", "Email Marketing"]:
    p = bundle.find(cat)
    print(f"Position of '{cat}':", p)
    if p != -1:
        print(bundle[p-100:p+200])
        print("="*40)
