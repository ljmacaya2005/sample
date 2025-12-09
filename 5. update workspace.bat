@echo off
cd /d "%~dp0"

echo Updating files in workspace...
git pull origin master

echo Files are now successfully synced to repository.
git switch master
pause
