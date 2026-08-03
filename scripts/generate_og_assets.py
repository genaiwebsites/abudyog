import os
import re
import io
import base64
from PIL import Image, ImageOps, ImageFilter, ImageDraw

PUBLIC_DIR = r'c:\Projects\AB Udyog\public'
OG_WIDE_DIR = os.path.join(PUBLIC_DIR, 'og')
OG_SQ_DIR = os.path.join(PUBLIC_DIR, 'og', 'square')

os.makedirs(OG_WIDE_DIR, exist_ok=True)
os.makedirs(OG_SQ_DIR, exist_ok=True)

def create_wide_banner(src_path, out_path, is_text_or_packshot=False):
    """Creates a standard 1200x630 (1.91:1) OpenGraph wide card image with seamless background blending."""
    with Image.open(src_path) as img:
        img = img.convert('RGBA')
        w, h = img.size
        
        if is_text_or_packshot:
            ratio = min(1200 / w, 630 / h)
            new_w, new_h = int(w * ratio), int(h * ratio)
            resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            # Create a soft blurred background expansion to eliminate hard solid sidebars
            bg = ImageOps.fit(img, (1200, 630), Image.Resampling.LANCZOS)
            bg = bg.filter(ImageFilter.GaussianBlur(radius=24))
            
            # Feather edge mask for smooth subtle blend
            mask = Image.new('L', (new_w, new_h), 255)
            draw = ImageDraw.Draw(mask)
            feather = 35
            
            if new_w < 1200:
                for x in range(feather):
                    alpha = int(255 * (x / feather))
                    draw.line([(x, 0), (x, new_h)], fill=alpha)
                    draw.line([(new_w - 1 - x, 0), (new_w - 1 - x, new_h)], fill=alpha)
            
            offset = ((1200 - new_w) // 2, (630 - new_h) // 2)
            bg.paste(resized, offset, mask)
            rgb_canvas = bg.convert('RGB')
            rgb_canvas.save(out_path, 'JPEG', quality=95, optimize=True)
        else:
            rgb_img = img.convert('RGB')
            fitted = ImageOps.fit(rgb_img, (1200, 630), Image.Resampling.LANCZOS)
            fitted.save(out_path, 'JPEG', quality=95, optimize=True)
            
    print(f"[OK] Wide OG: {os.path.basename(out_path)}")

def create_square_thumbnail(src_path, out_path, is_text_or_packshot=False):
    """Creates an 800x800 square OpenGraph thumbnail for WhatsApp/chat link cards."""
    with Image.open(src_path) as img:
        img = img.convert('RGBA')
        
        if is_text_or_packshot:
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
            rgb_img = img.convert('RGB')
            fitted = ImageOps.fit(rgb_img, (800, 800), Image.Resampling.LANCZOS)
            fitted.save(out_path, 'JPEG', quality=93, optimize=True)
            
    print(f"[OK] Square OG: {os.path.basename(out_path)}")

# Asset mapping: (wide_name, wide_src, sq_name, sq_src, is_packshot)
PAGE_ASSET_MAP = [
    ('og_homepage.jpg', 'ab-udyog-complete-edible-oils-and-dorb-product-range-white.png', 'sq_homepage.jpg', 'logo.png', True),
    ('og_about.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', 'sq_about.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', False),
    ('og_products.jpg', 'ab-udyog-complete-edible-oils-and-dorb-product-range-white.png', 'sq_products.jpg', 'ab-udyog-complete-edible-oils-and-dorb-product-range-white.png', True),
    ('og_ab_health.jpg', 'ab-health-edible-oils-brand-showcase-kolkata.svg', 'sq_ab_health.jpg', 'ab_health_logo_square.png', True),
    ('og_magik_dorb.jpg', 'ab-udyog-magik-dorb-super-fine-animal-feed-pack.png', 'sq_magik_dorb.jpg', 'ab-udyog-magik-dorb-super-fine-animal-feed-pack.png', True),
    ('og_de_oiled_rice_bran.jpg', 'dorb_feed.png', 'sq_de_oiled_rice_bran.jpg', 'dorb_feed.png', True),
    ('og_rice_bran_wax.jpg', 'rice_bran_wax_product.png', 'sq_rice_bran_wax.jpg', 'rice_bran_wax_product.png', True),
    ('og_rice_bran_gums.jpg', 'rice_bran_gums_product.png', 'sq_rice_bran_gums.jpg', 'rice_bran_gums_product.png', True),
    ('og_rice_bran_lecithin.jpg', 'ab_udyog_quality_assurance_laboratory_testing.png', 'sq_rice_bran_lecithin.jpg', 'ab_udyog_quality_assurance_laboratory_testing.png', False),
    ('og_rice_bran_fatty_acid.jpg', 'rice_bran_fatty_acid_product.png', 'sq_rice_bran_fatty_acid.jpg', 'rice_bran_fatty_acid_product.png', True),
    ('og_spent_bleaching_earth.jpg', 'spent_bleaching_earth_product.png', 'sq_spent_bleaching_earth.jpg', 'spent_bleaching_earth_product.png', True),
    ('og_infrastructure.jpg', 'ab_udyog_physical_refinery_pumping_pipeline_manifold.png', 'sq_infrastructure.jpg', 'ab_udyog_physical_refinery_pumping_pipeline_manifold.png', False),
    ('og_sustainability.jpg', 'bengal_rice_belt_paddy_fields_refinery_sourcing.png', 'sq_sustainability.jpg', 'bengal_rice_belt_paddy_fields_refinery_sourcing.png', False),
    ('og_gallery.jpg', 'ab_udyog_quality_assurance_laboratory_testing.png', 'sq_gallery.jpg', 'ab_udyog_quality_assurance_laboratory_testing.png', False),
    ('og_contact.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', 'sq_contact.jpg', 'ab_udyog_kolkata_factory_refinery_entrance.png', False),
]

def render_svg_or_load(src_path):
    """Loads image or decodes SVG base64 if available."""
    if src_path.endswith('.svg'):
        with open(src_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        m = re.search(r'data:image/jpeg;base64,([A-Za-z0-9+/=]+)', content)
        if m:
            img_data = base64.b64decode(m.group(1))
            return Image.open(io.BytesIO(img_data))
    return Image.open(src_path)

def main():
    print("Generating OpenGraph Wide (1200x630) and Square (800x800) Preview Assets...\n")
    for wide_name, wide_src, sq_name, sq_src, is_packshot in PAGE_ASSET_MAP:
        wide_src_path = os.path.join(PUBLIC_DIR, wide_src)
        sq_src_path = os.path.join(PUBLIC_DIR, sq_src)
        
        if os.path.exists(wide_src_path):
            wide_out = os.path.join(OG_WIDE_DIR, wide_name)
            img = render_svg_or_load(wide_src_path)
            tmp_path = os.path.join(PUBLIC_DIR, '_tmp_render.png')
            img.save(tmp_path)
            create_wide_banner(tmp_path, wide_out, is_packshot)
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

        if os.path.exists(sq_src_path):
            sq_out = os.path.join(OG_SQ_DIR, sq_name)
            img = render_svg_or_load(sq_src_path)
            tmp_path = os.path.join(PUBLIC_DIR, '_tmp_render.png')
            img.save(tmp_path)
            create_square_thumbnail(tmp_path, sq_out, is_packshot)
            if os.path.exists(tmp_path):
                os.remove(tmp_path)
        
    print("\nOpenGraph Asset Generation Complete!")

if __name__ == '__main__':
    main()
