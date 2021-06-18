import serial
import serial.tools.list_ports
import socket 

ports = list(serial.tools.list_ports.comports())

port = ''

for x in ports:
    if 'Maple' in x.description:
        port = x.device 

#TODO: Read port and Server.send() (p0, p1, p2, valve)
#      Server.get() If == 'valve' switch valve position

ser = serial.Serial(port)

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.bind(('', 5000))
server.listen()

conn, addr = server.accept()

while True:
    data = conn.recv(100).decode()
    if data[2] == '9':
        ser.write('A'.encode())
    elif data[2] == '8':
        ser.write('B'.encode())
    elif data[2] == '7':
        ser.write('C'.encode())
    elif data[2] == '6':
        ser.write('D'.encode())
    elif data[2] == '5':
        ser.write('E'.encode())
    elif data[2] == '4':
        ser.write('F'.encode())

    pressure = ser.read()
    if pressure && type(pressure) = float:
        conn.send(pressure)
