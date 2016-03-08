var util = require('util');

function Person(){
  this.name = 'SomeOne';
  this.toString = function(){
    return this.name;
  };
}

var obj = new Person();

console.log(util.inspect(obj, true));
