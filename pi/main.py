import serial
import serial.tools.list_ports
import socket 

ports = list(serial.tools.list_ports.comports())

port = []
pressure_ser = None
valve_ser = None 

for x in ports:
    if 'Maple' in x.description:
            port.append = x.device 

#TODO: Read port and Server.send() (p0, p1, p2, valve)
#      Server.get() If == 'valve' switch valve position

for x in port:
    ser = serial.Serial(x)
    ser.reset_input_buffer()
    if ser.readline() == b'pressure\r\n':
        ser.write('$\n'.encode())
        pressure_ser = ser 
    else if ser.readline() == b'valve\r\n':
        ser.write('$\n'.encode())
        valve_ser = ser 

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.bind(('', 5000))
server.listen()

conn, addr = server.accept()

while True:
    data = ''
    conn.settimeout(5)
    try:
        data = conn.recv(100).decode()
    except:
        print('No valve command, skipping')
    conn.settimeout(0)

    if data: 
        if data[2] == '9':
            valve_ser.write('A'.encode())
        elif data[2] == '8':
            valve_ser.write('B'.encode())
        elif data[2] == '7':
            valve_ser.write('C'.encode())
        elif data[2] == '6':
            valve_ser.write('D'.encode())
        elif data[2] == '5':
            valve_ser.write('E'.encode())
        elif data[2] == '4':
            valve_ser.write('F'.encode())

    pressure_ser.reset_input_buffer()
    data = pressure_ser.readline()
    if data:
        conn.sendall(data.encode())
        print(data.encode())
