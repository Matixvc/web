# =========================================================
# Validaciones finales Fase 1 (read-only sobre archivos ya ensamblados)
# =========================================================
$ErrorActionPreference = 'Stop'
$enc = [System.Text.UTF8Encoding]::new($false)
$root = 'C:\web'
$html = [IO.File]::ReadAllText("$root\public\portafolio\index.html", $enc)

function Assert-Count([string]$needle, [int]$expected, [string]$label) {
    $n = ([regex]::Matches($html, [regex]::Escape($needle))).Count
    if ($n -ne $expected) { throw ("{0}: esperado {1}, encontrado {2}" -f $label, $expected, $n) }
    Write-Host ("CHECK_OK {0} = {1}" -f $label, $n)
}

Assert-Count 'data-project-skills="' 3 'tarjetas filtrables (markup)'
Assert-Count '[data-project-skills]' 2 'usos del selector en JS'
Assert-Count '</html>' 1 'cierre documento'
Assert-Count '<nav' 3 'elementos nav (site/top/page)'
Assert-Count '<footer' 1 'footer contacto'
Assert-Count '<img' 1 'imagen de perfil unica'
Assert-Count 'loading="lazy"' 1 'lazy-load foto'
Assert-Count '<style>' 1 'un solo bloque style'
Assert-Count '</script>' 1 'un solo bloque script inline'

foreach ($b in @('cdn.tailwindcss.com', 'gsap', 'ScrollTrigger', 'trident-nav', 'MiFoto')) {
    if ($html -match [regex]::Escape($b)) { throw "Token prohibido presente: $b" }
}
Write-Host 'ANTI_REGRESION_OK (sin Tailwind / GSAP / trident / MiFoto)'

foreach ($n in @('IntersectionObserver', 'navigator.clipboard.writeText',
        'scroll-margin-top: 120px', '/og-image.png', 'data-reveal-stagger',
        '../img/matias.jpg', 'aria-pressed', 'role="tabpanel"',
        'd="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.293.707V19a2 2 0 01-2 2z"')) {
    if (-not $html.Contains($n)) { throw "Falta token requerido: $n" }
}
Write-Host 'TOKENS_REQUERIDOS_OK (incluye SVG-CV corregido)'

foreach ($f in @('index.html', 'cv/index.html')) {
    $txt = [IO.File]::ReadAllText("$root\public\$f", $enc)
    if ($txt.Contains('MiFoto.jpeg')) { throw "Referencia vieja en $f" }
    Write-Host ("CHECK_OK {0} sin referencias antiguas" -f $f)
}

Write-Host ''
Write-Host '========== FASE 1 VALIDADA COMPLETA =========='
Get-ChildItem "$root\public" -Recurse -File |
    Select-Object @{ n = 'Ruta'; e = { $_.FullName.Replace("$root\public\", '') } },
                   @{ n = 'KB'; e = { [int]($_.Length / 1KB * 10) / 10 } } |
    Format-Table -AutoSize
