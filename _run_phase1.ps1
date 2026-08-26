# =========================================================
# Recuperacion + Ensamblado final Fase 1 + Validaciones
# =========================================================
$ErrorActionPreference = 'Stop'
$enc = [System.Text.UTF8Encoding]::new($false)
$root = 'C:\web'

$order = @(
    '02a_nav_chips','02b_profile_css','03_work_css',
    '04a_contact_toast','04b_reveal_close','05_body_open',
    '06_hero','07_about','08a_projects_header','08b_projects_grids',
    '09_contact','10a_scripts_core','10b_scripts_ui')

$sb = [System.Text.StringBuilder]::new()
# La base actual (=chunk 1 truncado en index.html) es valida como cabecera
[void]$sb.Append([IO.File]::ReadAllText("$root\public\portafolio\index.html", $enc))
foreach ($p in $order) {
    [void]$sb.Append([IO.File]::ReadAllText("$root\_parts\$p.part.html", $enc))
}
$html = $sb.ToString().Replace('matias.webp', 'matias.jpg')
[IO.File]::WriteAllText("$root\public\portafolio\index.newfull.html", $html, $enc)

if ($html.Length -lt 38000) { throw "HTML final demasiado corto: $($html.Length)" }
Copy-Item "$root\public\portafolio\index.newfull.html" "$root\public\portafolio\index.html" -Force
Remove-Item "$root\public\portafolio\index.newfull.html" -Force
Write-Host ("PORTAFOLIO_OK bytes={0}" -f (Get-Item "$root\public\portafolio\index.html").Length)

$h = ([IO.File]::ReadAllText("$root\public\index.html", $enc)).Replace('src="MiFoto.jpeg"', 'src="img/matias.jpg"')
[IO.File]::WriteAllText("$root\public\index.html", $h, $enc)
$c = ([IO.File]::ReadAllText("$root\public\cv\index.html", $enc)).Replace('src="MiFoto.jpeg"', 'src="../img/matias.jpg"')
[IO.File]::WriteAllText("$root\public\cv\index.html", $c, $enc)
Write-Host 'REFS_FOTO_OK'

# ---------------- Validaciones ----------------
$m = [regex]::Match($html, '<script>([\s\S]*?)</script>')
if (-not $m.Success) { throw 'No se encontro el bloque <script> inline' }
[IO.File]::WriteAllText("$root\_tmp_inline.js", $m.Groups[1].Value, $enc)
node --check "$root\_tmp_inline.js"
if ($LASTEXITCODE -ne 0) { throw 'Sintaxis JS invalida' }
Write-Host 'JS_SYNTAX_OK'

function Assert-Count([string]$needle, [int]$expected, [string]$label) {
    $n = ([regex]::Matches($html, [regex]::Escape($needle))).Count
    if ($n -ne $expected) { throw ("{0}: esperado {1}, encontrado {2}" -f $label, $expected, $n) }
    Write-Host ("CHECK_OK {0} = {1}" -f $label, $n)
}
Assert-Count '<section' 3 'secciones section'
Assert-Count 'id="grid-' 3 'grillas port-item'
Assert-Count 'data-project-skills' 3 'tarjetas filtrables'
Assert-Count '</html>' 1 'cierre documento'

$bad = 'cdn.tailwindcss.com', 'gsap', 'ScrollTrigger', 'trident-nav', 'MiFoto', 'execCommand("copy") ;'
foreach ($b in $bad) {
    if ($html -match [regex]::Escape($b)) { throw "Token prohibido presente: $b" }
}
Write-Host 'ANTI_REGRESION_OK (sin Tailwind / GSAP / trident / MiFoto)'

$need = 'IntersectionObserver', 'navigator.clipboard.writeText',
        'scroll-margin-top: 120px', '/og-image.png', 'data-reveal-stagger',
        '../img/matias.jpg', 'aria-pressed', 'role="tabpanel"'
foreach ($n in $need) {
    if (-not $html.Contains($n)) { throw "Falta token requerido: $n" }
}
Write-Host 'TOKENS_REQUERIDOS_OK'

foreach ($f in 'index.html','cv/index.html') {
    $txt = [IO.File]::ReadAllText("$root\public\$f", $enc)
    if ($txt.Contains('MiFoto.jpeg')) { throw "Referencia vieja en $f" }
}
Write-Host 'REFS_FOTO_LIMPIAS_EN_HOME_Y_CV'
