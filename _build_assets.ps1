# =========================================================
#  Generador de assets (Fase 1) - PowerShell/GDI+ nativo
#  Salidas: img/matias.jpg | og-image.png | favicon.ico
# =========================================================
Add-Type -AssemblyName System.Drawing
$Root = 'C:\web\public'

function New-Font([string]$file, [int]$size) {
    $p = Join-Path 'C:\Windows\Fonts' $file
    if (-not (Test-Path $p)) { return $null }
    $col = [System.Drawing.Text.PrivateFontCollection]::new()
    $col.AddFontFile($p)
    return [System.Drawing.Font]::new($col.Families[0], $size,
        [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
}

function RoundRectPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $p = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $p.AddArc($x, $y, 2*$r, 2*$r, 180, 90)
    $p.AddArc(($x+$w-2*$r), $y, 2*$r, 2*$r, 270, 90)
    $p.AddArc(($x+$w-2*$r), ($y+$h-2*$r), 2*$r, 2*$r, 0, 90)
    $p.AddArc($x, ($y+$h-2*$r), 2*$r, 2*$r, 90, 90)
    $p.CloseFigure()
    return $p
}

$boldName  = @('seguibl.ttf','segoeuib.ttf','arialbd.ttf') | Where-Object { Test-Path ("C:\Windows\Fonts\$_") } | Select-Object -First 1
if (-not $boldName) { $boldName = 'arialbd.ttf' }
if (-not $boldName) { throw 'No se encontró ninguna fuente bold' }

# ---------------------------------------------------- 1) Foto optimizada
$srcPath = Join-Path $Root 'MiFoto.jpeg'
$src = [System.Drawing.Image]::FromFile($srcPath)
$ow = $src.Width; $oh = $src.Height
$tw = 480; $th = [int][Math]::Round($oh * $tw / $ow)
$dst = [System.Drawing.Bitmap]::new($tw, $th)
$g = [System.Drawing.Graphics]::FromImage($dst)
$g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode      = 'HighQuality'
$g.PixelOffsetMode    = 'HighQuality'
$g.DrawImage($src, 0, 0, $tw, $th)
$g.Dispose(); $src.Dispose()
$encJpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object MimeType -eq 'image/jpeg'
$ep = [System.Drawing.Imaging.EncoderParameters]::new(1)
$ep.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    [System.Drawing.Imaging.Encoder]::Quality, [long]82)
New-Item -ItemType Directory -Force -Path (Join-Path $Root 'img') | Out-Null
$outPhoto = Join-Path $Root 'img\matias.jpg'
$dst.Save($outPhoto, $encJpeg, $ep)
$dst.Dispose()
Write-Host ("FOTO: {0}x{1} -> {2}x{3} | {4}KB -> {5}KB" -f `
    $ow, $oh, $tw, $th, ((Get-Item $srcPath).Length/1KB -as [int]), ((Get-Item $outPhoto).Length/1KB -as [int]))

# ---------------------------------------------------- 2) og-image.png 1200x630
function Draw-SoftEllipse($g, [float]$x, [float]$y, [float]$w, [float]$h,
                          [System.Drawing.Color]$c, [int]$alphaMax, [int]$layers = 5) {
    for ($i = $layers; $i -ge 1; $i--) {
        $f = $i / $layers
        $b = [System.Drawing.SolidBrush]::new(
            [System.Drawing.Color]::FromArgb([int]($alphaMax * $f * $f / $layers), $c))
        $g.FillEllipse($b, $x - ($w*0.18*(1-$f)), $y - ($h*0.18*(1-$f)), $w*(1+(0.36*(1-$f))), $h*(1+(0.36*(1-$f))))
        $b.Dispose()
    }
}
$ogW = 1200; $ogH = 630
$og = [System.Drawing.Bitmap]::new($ogW, $ogH)
$ogG = [System.Drawing.Graphics]::FromImage($og)
$ogG.SmoothingMode = 'AntiAlias'
$ogG.TextRenderingHint = 'AntiAliasGridFit'
$ogG.Clear([System.Drawing.Color]::FromArgb(255, 3, 3, 8))

Draw-SoftEllipse $ogG (-160) (-140) 760 760 ([System.Drawing.Color]::FromArgb(255,0,242,255)) 34
Draw-SoftEllipse $ogG 560 220 820 720 ([System.Drawing.Color]::FromArgb(255,124,58,237)) 26

$cyanBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(230,0,242,255))
$whiteBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(246,245,248,252))
$greyBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(210,176,190,208))
$dotsBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120,255,255,255))

$ogG.FillRectangle($cyanBrush, 80, 66, 236, 5)

$fMonoS  = New-Font 'consolab.ttf' 21 ; if (-not $fMonoS) { $fMonoS  = [System.Drawing.Font]::new('Consolas',21,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel) }
$fMonoM  = New-Font 'consolab.ttf' 27 ; if (-not $fMonoM) { $fMonoM  = [System.Drawing.Font]::new('Consolas',27,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel) }
$lightName = @('segoeui.ttf','arial.ttf') | Where-Object { Test-Path ("C:\Windows\Fonts\$_") } | Select-Object -First 1

$ogG.DrawString(('P O R T A F O L I O   2 0 2 6'), $fMonoS, $greyBrush, 80, 92)

$title = 'MATIAS VILLALOBOS C.'
$tSize = 92
while ($tSize -gt 22) {
    $ft = New-Font $boldName $tSize
    $m = $ogG.MeasureString($title, $ft)
    if ($m.Width -le 1028) { break }
    $tSize -= 4
}
$ogG.DrawString($title, $ft, $whiteBrush, 76, 172)

$subText = 'UNITY DEVELOPER     -     XR / VR     -     GAME DESIGN'
$ogG.DrawString($subText, $fMonoM, $cyanBrush, 80, 330)

$chip = New-Font $lightName 22
if (-not $chip) { $chip = [System.Drawing.Font]::new('Segoe UI',22,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel) }
$contact = '+56 9 8757 6708      matias.villalobos.dev@gmail.com'
$cm = $ogG.MeasureString($contact, $chip)
$penGlass = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(70,255,255,255), 2)
$ogG.DrawPath($penGlass, (RoundRectPath 78 502 ($cm.Width+56) 62 31))
$ogG.DrawString($contact, $chip, $greyBrush, 104, 514)

# Monograma girado (marca del sitio)
$tile = [System.Drawing.Bitmap]::new(240, 240)
$tg = [System.Drawing.Graphics]::FromImage($tile)
$tg.SmoothingMode = 'AntiAlias'
$whiteFill = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(235,255,255,255))
$tg.FillPath($whiteFill, (RoundRectPath 12 12 216 216 52))
$fMono92 = New-Font $boldName 116
$mSz = $tg.MeasureString('M', $fMono92)
$blackBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,5,8,15))
$tg.DrawString('M', $fMono92, $blackBrush, (120-$mSz.Width/2), (112-$mSz.Height/2)-6)
$tg.Dispose()
$ogG.TranslateTransform(958, 292); $ogG.RotateTransform(45); $ogG.DrawImage($tile, -120, -120); $ogG.ResetTransform()
$tile.Dispose()

$fRt = [System.Drawing.StringFormat]::new(); $fRt.Alignment='Far'; $fRt.LineAlignment='Far'
$ogG.DrawString('PORTFOLIO / WEB + VR', $fMonoS, $greyBrush, $ogW, $ogH, $fRt)

$outOg = Join-Path $Root 'og-image.png'
$encPng = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object MimeType -eq 'image/png'
$epPng = [System.Drawing.Imaging.EncoderParameters]::new(1)
$epPng.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]90)
$og.Save($outOg, $encPng, $epPng)
$og.Dispose(); $ogG.Dispose()
Write-Host ("OG-IMAGE: {0}KB" -f ((Get-Item $outOg).Length/1KB -as [int]))

# ---------------------------------------------------- 3) favicon.ico real
$icoMs = [System.IO.MemoryStream]::new()
$bw = [System.IO.BinaryWriter]::new($icoMs)
$sizesPx = @(48, 32, 16)
$pngBytesList = @()
foreach ($dim in $sizesPx) {
    $fb2 = [System.Drawing.Bitmap]::new($dim, $dim)
    $fg2 = [System.Drawing.Graphics]::FromImage($fb2)
    $fg2.SmoothingMode = 'AntiAlias'; $fg2.TextRenderingHint = 'AntiAliasGridFit'
    $fg2.Clear([System.Drawing.Color]::Transparent)
    $scl = $dim / 192.0
    $fondo = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 6, 11, 22))
    $frame = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(150, 0, 242, 255), (8 * $scl))
    $rr = RoundRectPath (6*$scl) (6*$scl) (180*$scl) (180*$scl) (42*$scl)
    $fg2.FillPath($fondo, $rr); $fg2.DrawPath($frame, $rr)
    $fM = New-Font $boldName ([int](94 * $scl))
    if (-not $fM) { $fM = [System.Drawing.Font]::new('Arial', ([int](94 * $scl)), 'Bold', 'Pixel') }
    $mM = $fg2.MeasureString('M', $fM)
    $fg2.DrawString('M', $fM, [System.Drawing.Brushes]::White,
        (96 * $scl - $mM.Width / 2), (88 * $scl - $mM.Height / 2))
    $cyanBar = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 0, 242, 255))
    $fg2.FillRectangle($cyanBar, (58 * $scl), (140 * $scl), (76 * $scl), (9 * $scl))
    $fg2.Dispose()
    $bm2 = [System.IO.MemoryStream]::new()
    $fb2.Save($bm2, [System.Drawing.Imaging.ImageFormat]::Png)
    $fb2.Dispose()
    $pngBytesList += , $bm2.ToArray()
    $bm2.Dispose()
}
$bw.Write([uint16]0); $bw.Write([uint16]1); $bw.Write([uint16]$sizesPx.Count)
$offset = 6 + 16 * $sizesPx.Count
for ($i = 0; $i -lt $sizesPx.Count; $i++) {
    $len = $pngBytesList[$i].Length
    $bw.Write([byte]($sizesPx[$i] % 256)); $bw.Write([byte]($sizesPx[$i] % 256))
    $bw.Write([byte]0); $bw.Write([byte]0)
    $bw.Write([uint16]1); $bw.Write([uint16]32)
    $bw.Write([uint32]$len); $bw.Write([uint32]$offset)
    $offset += $len
}
foreach ($bytes in $pngBytesList) { $bw.Write($bytes) }
$bw.Flush()
$outIco = Join-Path $Root 'favicon.ico'
[System.IO.File]::WriteAllBytes($outIco, $icoMs.ToArray())
$bw.Dispose(); $icoMs.Dispose()
Write-Host ("FAVICON: {0} bytes" -f ((Get-Item $outIco).Length))

Write-Host 'ASSETS_OK'

