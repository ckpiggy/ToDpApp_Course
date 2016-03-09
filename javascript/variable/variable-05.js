/*
雖然在之前使用了很多global scope的變數，但這其實不是好事，
當大量使用global scope變數時，會造成名稱衝突，
比較好的方式是相關的全域功能放在一個物件裡面，
我們把之前的範例修改包裝成一個js singleton的物件。
*/
var setupName = {           //#A
  firstName : 'John',       //#B
  fullName : '',
  addLastName: function(){
    var lastName = 'Jinbo';       //#C
    setupName.fullName = setupName.firstName + ' ' + lastName;    //#D
    console.log(setupName.fullName);
  }
};

setupName.addLastName();

/*
#A 在宣告一個全域變數setupName，這個全域變數代表一個物件。
#B 原先firstName是全域變數，現在變成setupName的一個屬性。
#C 我們還是可以用var在function內定義區域變數。
#D 存取物件屬性時，必須使用全名。
*/

/*
雖然定義完setupName物件，我們還是可以對它新增額外的方法
*/
setupName.addInitial = function(initial){
  setupName.fullName = setupName.fullName.replace(' ',' ' + initial + ' ');
};

setupName.addInitial('A');
console.log(setupName.fullName);

/*
用這種方式可以避免我們的程式碼做出我們意想不到的動作。
*/
