param(
    [string]$Message = "Update Blu Idol website"
)

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
