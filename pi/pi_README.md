#Raspberry Pi

**Readme Authors:** Anthony Corneau & Nihal Kumarswamy   

## Description of the Raspberry Pi

<!-- This repository contains a code project that is a lightweight, highly extensible 
application that allows for plug and play for interfacing with a Raspberry Pi 
over IP to a controller computer, with sensors connected to the Pi - Nihal 
please clarify this section, and I will go over it and re-write it into laymans terms

This thang is in three components -->

This folder contains python programs used on the Pi to connect with the microcontrollers and creates a TCP server. 

The Pyserial library is used to interface with the microcontrollers over USB. 
The Pi routinely receives analog readings and sends commands to control the valves via a serial connection with the microcontrollers. 

The socket module is used to create a TCP server that users can connect to. The server listens for commands to control the valves and sends the latest sensor readings. Uses multi-threading to accept and serve multiple users.

For questions and troubleshooting, please contact:  
Nihal Kumarswamy  
nihal.kumarswamy@mavs.uta.edu  