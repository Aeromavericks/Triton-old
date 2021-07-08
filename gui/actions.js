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
  
/* */
$(document).ready(function(){
  
  var mc = {
    '0-19'     : 'red',
    '20-59'    : 'orange',
    '60-100'   : 'green'
  };
  
function between(x, min, max) {
  return x >= min && x <= max;
}
  

  
  var dc;
  var first; 
  var second;
  var th;
  
  $('p').each(function(index){
    
    th = $(this);
    
    dc = parseInt($(this).attr('data-color'),10);
    
    
      $.each(mc, function(name, value){
        
        
        first = parseInt(name.split('-')[0],10);
        second = parseInt(name.split('-')[1],10);
        
        console.log(between(dc, first, second));
        
        if( between(dc, first, second) ){
          th.addClass(value);
        }

    
    
      });
    
  });
});

/* gauges*/

