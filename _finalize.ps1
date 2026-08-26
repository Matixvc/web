# =========================================================
# Ensamblado IDEMPOTENTE definitivo (partes 01..10b) + validacion
# =========================================================
$ErrorActionPreference = 'Stop'
$enc = [System.Text.UTF8Encoding]::new($false)
$root = 'C:\web'

# --- Extraer cabecera como parte fija si aún no existe ---
$marker = '/* ===== Navegaci' # inicio de 02a (evita tildes issues usando prefijo seguro)
$htmlNow = [IO.File]::ReadAllText("$root\public\portafolio\index.html", $enc)
$idx = $htmlNow.IndexOf('        /* ===== Nav')
# buscar especificamente la primera regla CSS de navbar (viene de 02a)
$m2 = [regex]::Match($htmlNow, [regex]::Escape("        /* ===== Navegaci" ) )
if (-not $m2.Success) { throw 'Marcador de 02a no encontrado en index.html actual' }
$base01 = $htmlNow.Substring(0, $m2.Index)
[IO.File]::WriteAllText("$root\_parts\01_head.part.html", $base01, $enc)
Write-Host ("BASE_01_EXTRAIDA bytes={0}" -f $base01.Length)

$order = @(
    '01_head','02a_nav_chips','02b_profile_css','03_work_css',
    '04a_contact_toast','04b_reveal_close','05_body_open',
    '06_hero','07_about','08a_projects_header','08b_projects_grids',
    '09_contact','10a_scripts_core','10b_scripts_ui')

$sb = [System.Text.StringBuilder]::new()
foreach ($p in $order) {
    [void]$sb.Append([IO.File]::ReadAllText("$root\_parts\$p.part.html", $enc))
}
$html = $sb.ToString().Replace('matias.webp', 'matias.jpg')
[IO.File]::WriteAllText("$root\public\portafolio\index.newfull.html", $html, $enc)

if ($html.Length -lt 38000) { throw "HTML final demasiado corto: $($html.Length)" }
Copy-Item "$root\public\portafolio\index.newfull.html" "$root\public\portafolio\index.html" -Force
Remove-Item "$root\public\portafolio\index.newfull.html" -Force
Write-Host ("PORTAFOLIO_RECONSTRUIDO bytes={0}" -f (Get-Item "$root\public\portafolio\index.html").Length)

& powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$root\_validate_phase1.ps1"
