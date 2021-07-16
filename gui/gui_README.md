#GUI  

**Readme Authors:** Anthony Corneau & Nihal Kumarswamy   

## Description of the GUI

<!-- This repository contains a code project that is a lightweight, highly extensible 
application that allows for plug and play for interfacing with a Raspberry Pi 
over IP to a controller computer, with sensors connected to the Pi - Nihal 
please clarify this section, and I will go over it and re-write it into laymans terms

This thang is in three components -->

This folder contains a program built on electron.js to aid users perform specific actions to control any connected valves or receive readings from the connected sensors. 
The program uses the net library to connect to a TCP server running on a Pi. The computer running the program is on the same LAN connection as the Pi. 

# To install Node.js
Better instructions here: https://nodejs.org/

## To install all dependencies after installing Node.js
    npm install  
After installing, ensure you are NOT pushing your node_modules folder

# To build:
    npm run build-windows-x64  
    npm run build-linux-x64  

# To install from releases
    Add instructions to install from releases


For questions and troubleshooting, please contact:  
Nihal Kumarswamy  
nihal.kumarswamy@mavs.uta.edu  