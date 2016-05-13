@echo off

REM reference: https://technet.microsoft.com/en-us/library/cc733145(v=ws.11).aspx


echo "Synchronizing Stark contents"
robocopy . ../app/node_modules/shared *.* /e /z /mir /mt:8 

REM we can exclude folders if needed: /xd "node_modules"
REM we can add the following to watch for changes and sync automatically: /mon:1

REM pause