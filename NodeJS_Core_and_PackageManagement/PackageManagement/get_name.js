// var Hello = require('./name').Hello;
var Hello = require('./name');

var hello1 = new Hello();
hello1.setName('John');
hello1.sayHello();

var hello2 = new Hello();
hello2.setName('Marry');
hello2.sayHello();

hello1.sayHello();
