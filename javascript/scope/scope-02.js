//scope-02
var firstName = "John";
function addLastName(){
  var lastName = "Jinbo";
  global.fullName = firstName + ' ' + lastName;   //#A
  console.log(firstName + ' ' + lastName);
}
addLastName();
console.log(global.fullName);

/*
在scope-02裡面我們用了"global"這個關鍵字，如果有接觸瀏覽器端的javascript，
"global"關鍵字等於瀏覽器端的"window"，代表的是全域物件。

之所以說scope-02怪怪的，是因為我們在local scope裡面去定義global scope的變數。
在scope-02 #A這行，我們為全域物件增加了"fullName"屬性，這就等於是定義了一個全域變數。
雖然程式可以照常執行，但是其他人會感到困惑不了解"fullName"這個全域變數是怎麼來的！

雖然js規定要用var來宣告變數，但其實還有更詭異的宣告方法--“連var都不寫”，
當你這麼做時就隱含有宣告global變數的意味，請看scope-03。
*/
