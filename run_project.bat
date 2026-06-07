@echo off
echo ===================================================
echo Starting Order and Billing Management System
echo ===================================================
echo.

echo Starting Spring Boot Backend...
start "Backend Server" cmd /k "cd Order_and_Billing_Backend && .\mvnw.cmd spring-boot:run"

echo Starting React Frontend...
start "Frontend Server" cmd /k "cd Order_and_Billing && npm run dev"

echo.
echo Both servers are starting in separate windows.
echo You can close this window now.
