import os
import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def extract_images():
    output_dir = r"C:\Users\USER\.gemini\antigravity\scratch\portfolio\frontend\public\images"
    os.makedirs(output_dir, exist_ok=True)
    
    # Paths to the provided screenshots attached by the user.
    img2_path = r"C:\Users\USER\.gemini\antigravity\brain\afccf064-3964-4ddc-b78b-7864beb07e1b\media__1774783008993.png"
    img3_path = r"C:\Users\USER\.gemini\antigravity\brain\afccf064-3964-4ddc-b78b-7864beb07e1b\media__1774783009023.png"

    if os.path.exists(img2_path):
        with Image.open(img2_path) as img:
            print("Opened img2 size:", img.size)
            # The user wants "invoive pro" and "kras pay" images extracted.
            # We'll blindly crop an estimate assuming standard rendering if we can't find features.
            # But normally image 2 contains the two project cards. Let's slice right down the middle and top.
            w, h = img.size
            if w > 800:
                cv1 = img.crop((w * 0.1, h * 0.22, w * 0.45, h * 0.4))
                cv2 = img.crop((w * 0.55, h * 0.22, w * 0.9, h * 0.4))
                cv1.save(os.path.join(output_dir, "invoice-pro.webp"))
                cv2.save(os.path.join(output_dir, "kras-pay.webp"))
                print("Extracted project images")
            else:
                img.save(os.path.join(output_dir, "invoice-pro.webp"))
                img.save(os.path.join(output_dir, "kras-pay.webp"))

    if os.path.exists(img3_path):
        with Image.open(img3_path) as img:
            print("Opened img3 size:", img.size)
            # The hero image is the distributed ml framework.
            w, h = img.size
            if w > 800:
                cv3 = img.crop((w * 0.55, h * 0.15, w * 0.95, h * 0.45))
                cv3.save(os.path.join(output_dir, "ml-framework.webp"))
                print("Extracted ML framework image")
            else:
                img.save(os.path.join(output_dir, "ml-framework.webp"))
                
if __name__ == "__main__":
    extract_images()
