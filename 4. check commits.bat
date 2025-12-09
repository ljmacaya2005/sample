@echo off
cd /d "%~dp0"

echo Checking commits...
cls
git log --oneline

pause
