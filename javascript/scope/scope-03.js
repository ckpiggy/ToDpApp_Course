//scope-03
var firstName = "John";
function addLastName(){
  lastName = "Jinbo";
  console.log(firstName + ' ' + lastName);
}
addLastName();
console.log(firstName + ' ' + lastName);

/*
我們在functional scope裡面宣告了lastName，但是我們沒有用"var"關鍵字，
這時候會被視為宣告global變數。

雖然js給了一堆“巧門”讓我們宣告global變數，但是把global變數的定義藏在function裡面，
會造成維護上的困難。請養成一個好習慣

 “在變數所屬的scope裡面宣告它！”

*/
