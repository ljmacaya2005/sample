@echo off
cd /d "%~dp0"

echo Initializing Git repository...
git init
cls
set /p github_name=Enter GitHub Username: 
echo Host Github Account: https://github.com/%github_name%/
echo.
set /p repo_name=Enter repository name: 

echo Adding remote origin...
git remote add origin https://github.com/%github_name%/%repo_name%

echo Done!
pause
