const ipc = require('electron').ipcRenderer

valve_states = {
  "PB9": false,
  "PB8": false,
  "PB7": false,
  "PB6": false,
  "PB5": false,
  "PB4": false
};

function valve(ele){

    /* console.log("Valve button pressed");
    console.log(ele.id); */
    
    if(valve_states[ele.id] == false){
      document.getElementById(ele.id+'-status').innerHTML = '3.3V'
      valve_states[ele.id] = true;

      var args = {
        state: valve_states[ele.id],
        pin: ele.id
      };
      ipc.send('valve', {args});
    }
    else{
      document.getElementById(ele.id+'-status').innerHTML = '0V'
      valve_states[ele.id] = false;

      var args = {
        state: valve_states[ele.id],
        pin: ele.id
      };
      ipc.send('valve', {args});
    }


    
  }

