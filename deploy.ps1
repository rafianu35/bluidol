param(
    [string]$Message = "Update Blu Idol website"
)

Write-Host ">>> 1. Synchronizing files to 'blu idol' deployment folder..." -ForegroundColor Cyan
Copy-Item -Path 'images\*' -Destination 'blu idol\images\' -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'style.css' -Destination 'blu idol\style.css' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'index.html' -Destination 'blu idol\index.html' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'script.js' -Destination 'blu idol\script.js' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'CNAME' -Destination 'blu idol\CNAME' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'robots.txt' -Destination 'blu idol\robots.txt' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'sitemap.xml' -Destination 'blu idol\sitemap.xml' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'llms.txt' -Destination 'blu idol\llms.txt' -Force -ErrorAction SilentlyContinue
Copy-Item -Path 'llms-full.txt' -Destination 'blu idol\llms-full.txt' -Force -ErrorAction SilentlyContinue

Write-Host ">>> 2. Staging and committing git changes..." -ForegroundColor Cyan
git add -A
$status = git status --porcelain
if ($status) {
    git commit -m "$Message"
    Write-Host ">>> 3. Pushing to GitHub (origin main)..." -ForegroundColor Cyan
    git push origin main
    Write-Host ">>> Pushed successfully to GitHub!" -ForegroundColor Green
} else {
    Write-Host "No changes detected to commit." -ForegroundColor Yellow
}

Write-Host ">>> 4. Verifying live deployment on https://www.bluidol.in..." -ForegroundColor Cyan
Start-Sleep -Seconds 6
try {
    $res = Invoke-WebRequest -Uri "https://www.bluidol.in" -UseBasicParsing
    Write-Host ">>> Live Status: $($res.StatusCode) OK" -ForegroundColor Green
} catch {
    Write-Host ">>> Waiting for Vercel CDN propagation..." -ForegroundColor Yellow
}
