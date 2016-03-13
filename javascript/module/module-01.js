var my_module = (function(){
  var counter = 0;
  var setOffset = function(number){
    counter = number;
  };
  var addOne = function(){
    counter += 1;
  };
  var minusOne = function(){
    counter -= 1;
  };

  var getCount = function() {
    return counter;
  };

  return {
    setInitValue: setOffset,
    increase: addOne,
    decrease: minusOne,
    getValue: getCount,
  };
})();

var my_test = my_module;
var my_test2 = my_module;
my_test.setInitValue(20);
console.log('my_test ' +my_test.getValue());
my_test.increase();
console.log('my_test ' +my_test.getValue());
my_test.increase();
console.log('my_test ' +my_test.getValue());
console.log();
console.log('my_test2 '+my_test2.getValue());
