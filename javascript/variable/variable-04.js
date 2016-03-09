/*
在js的世界裡面下面兩種寫法代表的意思都是一樣的，
雖然如此js在看到#A的寫法時會自動轉譯成#B的寫法。

儘管功能一樣，但如果我們要確保程式的行為如我們所想，
就必須盡量把程式碼寫得js想看的一樣，不是嗎？
*/

//#A
function some_function(){
  return 'hello';
}

//#B
var some_function = function(){
  return 'hello';
};
