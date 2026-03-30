# Simple GitHub Pages Deployment
Write-Host "🚀 Starting GitHub Pages deployment..." -ForegroundColor Green

# Clean up git and start fresh
Remove-Item -Recurse -Force .git
git init
git branch -M main

# Copy only dist files
Write-Host "📁 Copying built files..." -ForegroundColor Blue
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Add and commit
Write-Host "📦 Adding files to git..." -ForegroundColor Blue
git add .
git commit -m "Deploy portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Add remote and push
Write-Host "🔗 Adding remote and pushing..." -ForegroundColor Blue
git remote add origin https://github.com/devibollam/devibollam.github.io.git
git push -u origin main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌍 Visit: https://devibollam.github.io/" -ForegroundColor Cyan
Write-Host "⏱️  Wait 2-10 minutes for GitHub Pages to update." -ForegroundColor Yellow
