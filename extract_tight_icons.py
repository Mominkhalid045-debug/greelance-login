from PIL import Image

items = [
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088845800.png',
        'out': r'src\assets\category_icons\cloud_computing_engineer.png',
        'name': 'Cloud',
        # Tightly target the icon part only
        'crop': (35, 8, 85, 48)
    },
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088874156.png',
        'out': r'src\assets\category_icons\digital_marketing_expert.png',
        'name': 'Digital Marketing',
        'crop': (35, 8, 85, 48)
    },
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088902416.png',
        'out': r'src\assets\category_icons\electric_vehicle_technology.png',
        'name': 'EV',
        'crop': (35, 8, 85, 48)
    }
]

for item in items:
    img = Image.open(item['path']).convert('RGBA')
    crop_area = img.crop(item['crop'])
    
    # Process pixels for transparent background
    pixels = crop_area.load()
    cw, ch = crop_area.size
    for x in range(cw):
        for y in range(ch):
            r, g, b, a = pixels[x, y]
            # Remove light card background pixels
            if r > 220 and g > 222 and b > 235:
                pixels[x, y] = (0, 0, 0, 0)
    
    bbox = crop_area.getbbox()
    if bbox:
        cropped = crop_area.crop(bbox)
        size = 48
        final = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        # Make icon size fill around 32-34px in a 48x48 box
        max_dim = 34
        cropped.thumbnail((max_dim, max_dim), Image.LANCZOS)
        px = (size - cropped.width) // 2
        py = (size - cropped.height) // 2
        final.paste(cropped, (px, py), cropped)
        final.save(item['out'], 'PNG')
        print(f"Successfully clean cropped {item['name']}: {cropped.size} -> 48x48 centered at ({px}, {py})")

