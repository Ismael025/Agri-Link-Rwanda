# CSS Formatter Script
$cssDir = "d:\CLASS_PROJ\HTML\Agri-Link-Rwanda\admin\styles"
$files = Get-ChildItem $cssDir -Filter "*.css"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Add newlines after closing braces
    $content = $content -replace '}\s*\.', "}\n\n."
    $content = $content -replace '}\s*@', "}\n\n@"
    
    # Add newlines and indentation for properties
    $content = $content -replace ';', ";\n  "
    
    # Clean up multiple spaces
    $content = $content -replace '\s{2,}', " "
    $content = $content -replace '\n  \n', "\n"
    
    Set-Content $file.FullName $content -NoNewline
    Write-Host "Formatted: $($file.Name)"
}
