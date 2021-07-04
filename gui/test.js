const net = require('net')

const port = 5000;
const host = '192.168.0.140'

const client = new net.Socket();
client.connect({port: port, host:host}), function(){
  console.log('Connected');
}

client.on('error', function(ex){
    console.log(ex);
})

client.on('data', function(data){
  console.log(data.toString());
})

//TODO: Run this with no write, test what happens when sending multiple data packets from Pi
//client.write('PB9');
