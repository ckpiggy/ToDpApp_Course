var process = require('process');

var message = '';

//setup event listener when there is data input
process.stdin.on('data', function(data){
  if(data.toString() === 'end\n'){
    process.stdout.write(message);
    process.exit();
  }else{
    message += data.toString();
  }
});

//start listen for data input
process.stdin.resume();
