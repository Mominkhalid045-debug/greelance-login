from PIL import Image
import os

icons_dir = r"src\assets\category_icons"

# Fix these 3 icons that have huge transparent padding
problem_icons = [
    "cloud_computing_engineer.png",
    "electric_vehicle_technology.png",
    "digital_marketing_expert.png",
]

for icon_name in problem_icons:
    path = os.path.join(icons_dir, icon_name)
    img = Image.open(path).convert("RGBA")
    print(f"\n{icon_name}: original size {img.size}")

    # Get bounding box of non-transparent content
    bbox = img.getbbox()
    print(f"  Content bbox: {bbox}")

    if bbox:
        cropped = img.crop(bbox)
        print(f"  Cropped size: {cropped.size}")

        # Create a square canvas (48x48) and center the icon in it
        size = 48
        new_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        # Scale down if too big, maintain aspect ratio
        cropped.thumbnail((size, size), Image.LANCZOS)
        paste_x = (size - cropped.width) // 2
        paste_y = (size - cropped.height) // 2
        new_img.paste(cropped, (paste_x, paste_y))
        new_img.save(path, format="PNG")
        print(f"  Saved as {size}x{size} with icon centered at ({paste_x},{paste_y})")
    else:
        print("  WARNING: No content found in image!")

print("\nAll done!")
