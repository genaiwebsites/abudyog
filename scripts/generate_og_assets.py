import os
from PIL import Image, ImageOps

PUBLIC_DIR = r'c:\Projects\AB Udyog\public'
OG_WIDE_DIR = os.path.join(PUBLIC_DIR, 'og')
OG_SQ_DIR = os.path.join(PUBLIC_DIR, 'og', 'square')

os.makedirs(OG_WIDE_DIR, exist_ok=True)
os.makedirs(OG_SQ_DIR, exist_ok=True)

def create_wide_banner(src_path, out_path, is_text_or_packshot=False):
    """Creates a standard 1200x630 (1.91:1) OpenGraph wide card image."""
    with Image.open(src_path) as img:
        img = img.convert('RGBA')
        
        if is_text_or_packshot:
            # Aspect containment with background padding to protect text/packshots from clipping
            top_left = img.getpixel((0, 0))
            bg_color = (top_left[0], top_left[1], top_left[2], 255) if len(top_left) == 4 and top_left[3] == 255 else (255, 255, 255, 255)
            
            canvas = Image.new('RGBA', (1200, 630), bg_color)
            w, h = img.size
            ratio = min(1200 / w, 630 / h)
            new_w, new_h = int(w * ratio), int(h * ratio)
            resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            offset = ((1200 - new_w) // 2, (630 - new_h) // 2)
            canvas.paste(resized, offset, resized)
            rgb_canvas = canvas.convert('RGB')
            rgb_canvas.save(out_path, 'JPEG', quality=93, optimize=True)
        else:
            # Full bleed crop for photography
            rgb_img = img.convert('RGB')
            fitted = ImageOps.fit(rgb_img, (1200, 630), Image.Resampling.LANCZOS)
            fitted.save(out_path, 'JPEG', quality=93, optimize=True)
            
    print(f"[OK] Wide OG: {os.path.basename(out_path)}")

def create_square_thumbnail(src_path, out_path, is_text_or_packshot=False):
    """Creates an 800x800 square OpenGraph thumbnail for WhatsApp/chat link cards."""
    with Image.open(src_path) as img:
        img = img.convert('RGBA')
        
        if is_text_or_packshot:
            # Padded contain to protect packaging text & logos
            top_left = img.getpixel((0, 0))
            bg_color = (top_left[0], top_left[1], top_left[2], 255) if len(top_left) == 4 and top_left[3] == 255 else (255, 255, 255, 255)
            
            canvas = Image.new('RGBA', (800, 800), bg_color)
            w, h = img.size
            ratio = min(800 / w, 800 / h)
            new_w, new_h = int(w * ratio), int(h * ratio)
            resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            offset = ((800 - new_w) // 2, (800 - new_h) // 2)
            canvas.paste(resized, offset, resized)
            rgb_canvas = canvas.convert('RGB')
            rgb_canvas.save(out_path, 'JPEG', quality=93, optimize=True)
        else:
            # Full-bleed 1:1 zoom cover for photos
            rgb_img = img.convert('RGB')
            fitted = ImageOps.fit(rgb_img, (800, 800), Image.Resampling.LANCZOS)
            fitted.save(out_path, 'JPEG', quality=93, optimize=True)
            
    print(f"[OK] Square OG: {os.path.basename(out_path)}")

# Asset mapping dictionary: (key_name, source_filename, is_text_or_packshot)
PAGE_ASSET_MAP = [
    ('og_homepage.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', False),
    ('og_about.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', False),
    ('og_products.jpg', 'ab-udyog-complete-edible-oils-and-dorb-product-range-white.png', True),
    ('og_ab_health.jpg', 'ab_health_product.png', True),
    ('og_magik_dorb.jpg', 'ab-udyog-magik-dorb-super-fine-animal-feed-pack.png', True),
    ('og_de_oiled_rice_bran.jpg', 'dorb_feed.png', True),
    ('og_rice_bran_wax.jpg', 'rice_bran_wax_product.png', True),
    ('og_rice_bran_gums.jpg', 'rice_bran_gums_product.png', True),
    ('og_rice_bran_lecithin.jpg', 'rice_bran_lecithin_product.png', True),
    ('og_rice_bran_fatty_acid.jpg', 'rice_bran_fatty_acid_product.png', True),
    ('og_spent_bleaching_earth.jpg', 'spent_bleaching_earth_product.png', True),
    ('og_infrastructure.jpg', 'ab_udyog_physical_refinery_pumping_pipeline_manifold.png', False),
    ('og_sustainability.jpg', 'bengal_rice_belt_paddy_fields_refinery_sourcing.png', False),
    ('og_gallery.jpg', 'ab_udyog_quality_assurance_laboratory_testing.png', False),
    ('og_contact.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', False),
]

def main():
    print("Generating OpenGraph Wide (1200x630) and Square (800x800) Preview Assets...\n")
    for name, src_file, is_packshot in PAGE_ASSET_MAP:
        src_path = os.path.join(PUBLIC_DIR, src_file)
        if not os.path.exists(src_path):
            print(f"Warning: Source {src_file} not found, skipping {name}")
            continue
            
        wide_out = os.path.join(OG_WIDE_DIR, name)
        sq_name = name.replace('og_', 'sq_') if name.startswith('og_') else f"sq_{name}"
        sq_out = os.path.join(OG_SQ_DIR, sq_name)
        
        create_wide_banner(src_path, wide_out, is_packshot)
        create_square_thumbnail(src_path, sq_out, is_packshot)
        
    print("\nOpenGraph Asset Generation Complete!")

if __name__ == '__main__':
    main()
