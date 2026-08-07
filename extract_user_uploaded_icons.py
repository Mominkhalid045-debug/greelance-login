from PIL import Image
import numpy as np

items = [
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088845800.png',
        'out': r'src\assets\category_icons\cloud_computing_engineer.png',
        'name': 'Cloud'
    },
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088874156.png',
        'out': r'src\assets\category_icons\digital_marketing_expert.png',
        'name': 'Digital Marketing'
    },
    {
        'path': r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786088902416.png',
        'out': r'src\assets\category_icons\electric_vehicle_technology.png',
        'name': 'EV'
    }
]

for item in items:
    img = Image.open(item['path']).convert('RGBA')
    w, h = img.size
    # Icon is on the left side of the card, roughly first 90px width
    crop_area = img.crop((10, 2, 90, h - 2))
    
    # Make background pixels transparent (the card background is light bluish #F2F4FE / #FFFFFF)
    data = np.array(crop_area)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Identify background pixels (very light pixels where R > 235, G > 238, B > 245)
    bg_mask = (r > 230) & (g > 234) & (b > 242)
    data[:,:,3][bg_mask] = 0
    
    clean_icon = Image.fromarray(data, 'RGBA')
    
    # Crop to non-transparent bounding box
    bbox = clean_icon.getbbox()
    if bbox:
        cropped = clean_icon.crop(bbox)
        # Create a centered 48x48 canvas
        size = 48
        final = Image.new('RGBA', (size, size), (0,0,0,0))
        # Scale cropped to fit inside 36x36 for crisp padding
        max_dim = 36
        cropped.thumbnail((max_dim, max_dim), Image.LANCZOS)
        px = (size - cropped.width) // 2
        py = (size - cropped.height) // 2
        final.paste(cropped, (px, py), cropped)
        final.save(item['out'], 'PNG')
        print(f"Successfully processed {item['name']}: {cropped.size} -> 48x48 centered at ({px}, {py})")
    else:
        print(f"Error processing {item['name']}")

