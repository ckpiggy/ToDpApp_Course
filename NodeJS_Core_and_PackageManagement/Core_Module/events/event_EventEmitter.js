var events = require('events');
var util = require('util');

function my_emitter(){
}
util.inherits(my_emitter, events.EventEmitter);

var my_emitter_obj = new my_emitter();

my_emitter_obj.on('some_event', function(argv1, argv2){
  console.log('listener1', argv1, argv2);
});

my_emitter_obj.once('some_event', function(argv1, argv2){
  console.log('listener2', argv1, argv2);
});

my_emitter_obj.emit('some_event', 123, 'test');
console.log('\n=======================\n');
my_emitter_obj.emit('some_event', 456, 'test2');
my_emitter_obj.removeAllListeners('some_event');
console.log('\n=======================\n');
my_emitter_obj.emit('some_event', 789, 'test3');
