Param()
Add-Type -AssemblyName System.Drawing
$publicDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$src = Join-Path $publicDir 'logo.jpeg'
if (!(Test-Path $src)) { Write-Error "Source logo not found: $src"; exit 1 }

function Save-Png {
  Param(
    [Parameter(Mandatory=$true)] [System.Drawing.Image] $SrcBmp,
    [Parameter(Mandatory=$true)] [int] $Size,
    [Parameter(Mandatory=$true)] [string] $OutPath
  )
  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.DrawImage($SrcBmp, 0, 0, $Size, $Size)
  $g.Dispose()
  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

$orig = [System.Drawing.Image]::FromFile($src)
Save-Png -SrcBmp $orig -Size 16 -OutPath (Join-Path $publicDir 'favicon-16x16.png')
Save-Png -SrcBmp $orig -Size 32 -OutPath (Join-Path $publicDir 'favicon-32x32.png')
Save-Png -SrcBmp $orig -Size 48 -OutPath (Join-Path $publicDir 'favicon-48x48.png')
Save-Png -SrcBmp $orig -Size 180 -OutPath (Join-Path $publicDir 'apple-touch-icon.png')

# Create ICO from 48x48 PNG
$png48 = Join-Path $publicDir 'favicon-48x48.png'
$bmp48 = [System.Drawing.Bitmap]::FromFile($png48)
$hIcon = $bmp48.GetHicon()
$ico = [System.Drawing.Icon]::FromHandle($hIcon)
$icoPath = Join-Path $publicDir 'favicon.ico'
$fs = [System.IO.File]::Open($icoPath, [System.IO.FileMode]::Create)
$ico.Save($fs)
$fs.Dispose()
$ico.Dispose()
$bmp48.Dispose()
$orig.Dispose()

Write-Output 'Generated: favicon-16x16.png, favicon-32x32.png, favicon-48x48.png, apple-touch-icon.png, favicon.ico'
