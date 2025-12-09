@echo off
cd /d "%~dp0"

echo Unstaging all staged files...
git reset

echo Adding all files...
git add .

cls

set /p user_message=Enter commit message: 
git commit -m "%user_message%"

echo Pushing all branches to origin...
git push --all origin


echo Done!
pause
