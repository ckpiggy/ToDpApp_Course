var process = require('process');

var task2 = function(){
  console.log('task2');
};

var task1 = function(){
  console.log('task1');
};

process.nextTick(task2);
task1();
