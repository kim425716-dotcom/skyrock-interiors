@echo off
echo ========================================================
echo   Starting Skyrock Interiors Limited Website Server
echo ========================================================
echo.
echo Launching local server at http://localhost:3000 ...
start http://localhost:3000
cmd.exe /c "npx vite preview --port 3000"
pause
