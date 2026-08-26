"""Genera los assets optimizados del sitio (Fase 1). Ejecutar: py _build_assets.py"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = r"C:\web\public"
FONTS = r"C:\Windows\Fonts"
CYAN = (0, 242, 255)
VIOLET = (124, 58, 237)

def font(candidates, size):
    for name in candidates:
        p = os.path.join(FONTS, name)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def fit_text(draw, text, fonts, start_size, max_width):
    """Reduce el tamano de fuente hasta que el texto quepa en max_width."""
    for size in range(start_size, 20, -2):
        f = font(fonts, size)
        if draw.textlength(text, font=f) <= max_width:
            return f
    return font(fonts, 22)

def spaced(s, n=1):
    return (" " * n).join(list(s))

# ---------------------------------------------------------------- Foto WebP
src_path = os.path.join(ROOT, "MiFoto.jpeg")
img = Image.open(src_path).convert("RGB")
ow, oh = img.size
TW = 480
if ow > TW:
    img = img.resize((TW, round(oh * TW / ow)), Image.LANCZOS)
out_photo = os.path.join(ROOT, "img", "matias.webp")
img.save(out_photo, "WEBP", quality=82, method=6)
print(f"FOTO: {ow}x{oh} -> {img.size[0]}x{img.size[1]} "
      f"{os.path.getsize(src_path)//1024}KB -> {os.path.getsize(out_photo)//1024}KB")

# ------------------------------------------------------------- og-image.png
W, H = 1200, 630
base = Image.new("RGB", (W, H), (3, 3, 8))

glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse((-260, -220, 720, 700), fill=CYAN + (42,))
gd.ellipse((560, 210, 1460, 900), fill=VIOLET + (34,))
glow = glow.filter(ImageFilter.GaussianBlur(130))
base.paste(glow, (0, 0), glow)

d = ImageDraw.Draw(base)

def fb(size):  # familia bold/black de Segoe UI
    return font(["seguibl.ttf", "segoeuib.ttf", "arialbd.ttf"], size)

def fm(size):  # mono
    return font(["consolab.ttf", "consola.ttf"], size)

# linea de acento + eyebrow
d.rectangle((80, 66, 316, 71), fill=CYAN)
d.text((80, 92), spaced("PORTAFOLIO 2026"), font=fm(21), fill=(160, 178, 196))

# titulo
title = "MATIAS VILLALOBOS C."
tf = fit_text(d, title, ["seguibl.ttf", "segoeuib.ttf", "arialbd.ttf"], 92, 1030)
d.text((76, 176), title, font=tf, fill=(245, 248, 252))

# subtitulo
sub = "UNITY DEVELOPER   ·   XR / VR   ·   GAME DESIGN"
d.text((80, 330), sub, font=fm(27), fill=CYAN)

# chip inferior con datos
chip_f = font(["segoeuil.ttf", "segoeui.ttf", "arial.ttf"], 22)
text = "+56 9 8757 6708      matias.villalobos.dev@gmail.com"
tw = d.textlength(text, font=chip_f)
d.rounded_rectangle((80, 508, 108 + tw, 562), radius=27,
                    outline=(255, 255, 255, 46), width=2)
d.text((104, 520), text, font=chip_f, fill=(188, 199, 214))

# monograma girado (marca)
tile = Image.new("RGBA", (230, 230), (0, 0, 0, 0))
td = ImageDraw.Draw(tile)
td.rounded_rectangle((14, 14, 216, 216), radius=52, fill=(255, 255, 255, 235))
mf = fb(116)
tb = td.textbbox((0, 0), "M", font=mf)
td.text((115 - (tb[2] - tb[0]) / 2 - tb[0], 115 - (tb[3] - tb[1]) / 2 - tb[1]),
        "M", font=mf, fill=(5, 8, 15))
tile = tile.rotate(45, expand=True, resample=Image.BICUBIC)
base.paste(tile, (838, 172), tile)

d.text((W - 80, H - 44), "PORTFOLIO / WEB + VR", font=fm(17),
       fill=(120, 134, 152), anchor="rs")

out_og = os.path.join(ROOT, "og-image.png")
base.save(out_og, "PNG", optimize=True)
print(f"OG: {os.path.getsize(out_og)//1024}KB -> {out_og}")

# ------------------------------------------------------------- favicon.ico
fav = Image.new("RGBA", (192, 192), (0, 0, 0, 0))
fd = ImageDraw.Draw(fav)
fd.rounded_rectangle((10, 10, 182, 182), radius=44, fill=(6, 11, 22, 255),
                     outline=CYAN + (150,), width=8)
fmf = fb(92)
mb = fd.textbbox((0, 0), "M", font=fmf)
fd.text((96 - (mb[2] - mb[0]) / 2 - mb[0], 88 - (mb[3] - mb[1]) / 2 - mb[1]),
        "M", font=fmf, fill=(255, 255, 255))
fd.rectangle((58, 138, 134, 148), fill=CYAN)
fav.save(os.path.join(ROOT, "favicon.ico"), format="ICO",
         sizes=[(16, 16), (32, 32), (48, 48)])
print(f"FAVICON: {os.path.getsize(os.path.join(ROOT,'favicon.ico'))} bytes")

print("ASSETS_OK")
