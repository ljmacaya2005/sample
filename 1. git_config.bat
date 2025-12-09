@echo off
cd /d "%~dp0"

set /p user_name=Enter Git user.name: 
set /p user_email=Enter Git user.email: 

echo Setting Git global configs...
git config --global user.name "%user_name%"
git config --global user.email "%user_email%"

echo.
echo Git config saved!
pause
