@echo off

REM Provera da li je npm instaliran
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo npm nije instaliran. Molimo instalirajte ga.
    pause
    exit /b 1
)

REM Postavljanje radnog direktorijuma na trenutni
cd /d %~dp0

REM Izvrsavanje npm install
echo Izvrsavam npm install...
call npm install
if %errorlevel% neq 0 (
    echo Greska prilikom izvrsavanja npm install.
    pause
    exit /b 1
)

REM Izvrsavanje npm start
echo Izvrsavam npm start...
start npm start
if %errorlevel% neq 0 (
    echo Greska prilikom izvrsavanja npm start.
    pause
    exit /b 1
)

echo.
echo Pritisnite bilo koji taster za zatvaranje prozora.
pause >nul
