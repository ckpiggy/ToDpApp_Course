var util = require('util');

function Base(theName){
  this.name = theName;
  this.age = 19;
  this.sayHello = function(){
    console.log('Hello '+this.name);
  };
}

Base.prototype.showName = function(){
  console.log(this.name);
};

function Sub(){
  this.name = 'Sub';
}

util.inherits(Sub, Base);

var objBase = new Base('John');

objBase.showName();
objBase.sayHello();
console.log(objBase);

console.log('\n========================\n');

var objSub = new Sub('Mary');

objSub.showName();
//objSub.sayHello();
console.log(objSub);
