import math
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

# Base canvas
base = Image.new('RGBA', (W, H), (14, 38, 68, 255))
draw = ImageDraw.Draw(base)

# Rich luxury background gradient matching dentist-olimjon brand palette
for x in range(W):
    t = x / W
    r = int(10 + 12 * t)
    g = int(28 + 26 * t)
    b = int(54 + 48 * t)
    draw.line([(x, 0), (x, H)], fill=(r, g, b, 255))

# Photo blend
doc = Image.open('frontend/src/assets/dr_olimjon_clinic.webp').convert('RGBA')
orig_w, orig_h = doc.size
crop_box = (0, 30, orig_w, 1150)
doc_cropped = doc.crop(crop_box)

target_h = 630
scale = target_h / doc_cropped.size[1]
target_w = int(doc_cropped.size[0] * scale)
doc_resized = doc_cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

paste_x = W - target_w

mask = Image.new('L', (target_w, target_h), 255)
blend_width = int(target_w * 0.45)
for x in range(target_w):
    if x < blend_width:
        v = x / blend_width
        alpha = int(255 * (0.5 - 0.5 * math.cos(v * math.pi)))
        for y in range(target_h):
            mask.putpixel((x, y), alpha)
    else:
        for y in range(target_h):
            mask.putpixel((x, y), 255)

base.paste(doc_resized, (paste_x, 0), mask)

# Redraw on composite
draw = ImageDraw.Draw(base)

# Top gold accent line
gold_color = (229, 186, 115, 255) # #e5ba73
draw.rounded_rectangle([75, 68, 200, 72], radius=2, fill=gold_color)

# Clinic logo
logo = Image.open('frontend/src/assets/logo.png').convert('RGBA')
logo_size = 54
logo_resized = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

# Create white circular badge for logo
badge_size = 60
badge = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
badge_draw = ImageDraw.Draw(badge)
badge_draw.ellipse([0, 0, badge_size-1, badge_size-1], fill=(255, 255, 255, 240), outline=(229, 186, 115, 220), width=2)
offset = (badge_size - logo_size) // 2
badge.paste(logo_resized, (offset, offset), logo_resized)

base.paste(badge, (75, 115), badge)

# Load fonts
font_dir = 'C:/Windows/Fonts/'
font_brand_top = ImageFont.truetype(font_dir + 'segoeuib.ttf', 16)
font_brand_sub = ImageFont.truetype(font_dir + 'segoeui.ttf', 13)
font_title = ImageFont.truetype(font_dir + 'georgiab.ttf', 52)
font_subtitle = ImageFont.truetype(font_dir + 'segoeuib.ttf', 27)
font_services = ImageFont.truetype(font_dir + 'segoeui.ttf', 21)
font_badges = ImageFont.truetype(font_dir + 'segoeui.ttf', 19)
font_btn = ImageFont.truetype(font_dir + 'segoeuib.ttf', 18)
font_phone = ImageFont.truetype(font_dir + 'segoeuib.ttf', 25)

# Clinic branding text
draw.text((150, 122), 'SEVDO DENTA · ANDIJON', font=font_brand_top, fill=(160, 196, 230, 255))
draw.text((150, 146), 'STOMATOLOGIK KLINIKASI', font=font_brand_sub, fill=(125, 165, 202, 255))

# Doctor name
draw.text((75, 225), 'Dr. Olimjon Murzajanov', font=font_title, fill=(255, 255, 255, 255))

# Subtitle
draw.text((75, 300), 'Zamonaviy Stomatolog va Ortoped', font=font_subtitle, fill=(110, 185, 245, 255))

# Services
draw.text((75, 360), "Tsirkoniy karonka · E-max vinirlar · Implantatsiya", font=font_services, fill=(225, 235, 245, 255))

# Trust badge
draw.text((75, 402), "100% Og'riqsiz muolaja · 5+ yillik tajriba", font=font_badges, fill=(165, 188, 210, 255))

# CTA Button 'Qabulga Yozilish'
btn_box = [75, 480, 290, 538]
btn_color = (254, 240, 185, 255) # cream gold
draw.rounded_rectangle(btn_box, radius=14, fill=btn_color)

btn_text = 'Qabulga Yozilish'
bbox = draw.textbbox((0, 0), btn_text, font=font_btn)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
tx = btn_box[0] + (btn_box[2] - btn_box[0] - tw) // 2
ty = btn_box[1] + (btn_box[3] - btn_box[1] - th) // 2 - 2
draw.text((tx, ty), btn_text, font=font_btn, fill=(19, 46, 83, 255))

# Phone number
draw.text((320, 492), '+998 (94) 001-01-56', font=font_phone, fill=(255, 255, 255, 255))

# Save output
base.convert('RGB').save('frontend/public/dr_olimjon_og.jpg', quality=95)
base.convert('RGB').save('frontend/dist/dr_olimjon_og.jpg', quality=95)
base.convert('RGB').save('frontend/src/assets/dr_olimjon_og.jpg', quality=95)
print('Generated dr_olimjon_og.jpg successfully in public, dist, and src/assets')
