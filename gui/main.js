const { app, BrowserWindow, ipcMain, } = require('electron');
const net = require('net');

const port = 5000;
const host = '192.168.0.140';

const client = new net.Socket();

client.connect({port: port, host:host}), function(){
  console.log('Connected');
};

client.on('error', function(ex){
    console.log(ex);
});

client.on('data', function(data){
  console.log(data);
});

//https://icon-icons.com/users/wiyPiuz6JoXIZH9xL2L8k/icon-sets/
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    icon: 'icon.png',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.maximize();
  //win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  client.destroy();
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

ipcMain.on('valve', function(event, args){
  
  /* console.log(args['args ']['state']); */
  client.write(args['args']['pin']+args['args']['state']);
  //console.log(args['args'].toString())
})
