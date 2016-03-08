var util = require('util');

function Base(theName){
  this.name = theName;
  this.age = 19;
}


Base.prototype.showName = function(){
  console.log(this.name);
};
Base.prototype.sayHello = function () {
  console.log('Hello '+this.name);
};

function Sub(theName){
  this.name = theName;
}

util.inherits(Sub, Base);

var objBase = new Base('John');

objBase.showName();
objBase.sayHello();
console.log(util.inspect(objBase,true));

console.log('\n========================\n');

var objSub = new Sub('Mary');

objSub.showName();
objSub.sayHello();
console.log(objSub);
