from PIL import Image

img = Image.open(r'C:\Users\HTC\.gemini\antigravity\brain\cbefee25-5da0-4b37-8a8f-7ee6b52507b5\media__1786090004741.png').convert('RGB')
w, h = img.size

# Let's crop the left blue banner region from the Figma screenshot
# In the image (1015, 732), the blue banner starts around x=77, y=30, x_end=553, y_end=653
crop_banner = img.crop((79, 32, 552, 650))
crop_banner.save(r'src\assets\figma_left_banner_raw.png')

# Also crop just the middle 3D cards illustration from x=140 to x=500, y=200 to y=520
crop_illustration = img.crop((120, 200, 510, 520))
crop_illustration.save(r'src\assets\role_banner_illustration_exact.png')

print("Cropped banner raw size:", crop_banner.size)
print("Cropped illustration exact size:", crop_illustration.size)

