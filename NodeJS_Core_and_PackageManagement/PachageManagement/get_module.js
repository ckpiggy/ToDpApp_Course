//require local module（非核心module）時請用相對路徑！
var hello1 = require('./module');

hello1.setName('John');
hello1.sayHello();

var hello2 = require('./module');
hello2.setName('Mary');
hello2.sayHello();

//猜猜看下面一行解開註解後會發生什麼事情？
//hello1.sayHello();
