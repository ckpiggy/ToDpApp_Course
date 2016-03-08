function Hello(){

  this.name = '';

  this.setName = function(theName){
    this.name = theName;
  };

  this.sayHello = function(){
    console.log('Hello ' + this.name);
  };
}

exports.Hello = Hello;
// 可以用module.exports更改這個module的根物件！
// module.exports = Hello;
