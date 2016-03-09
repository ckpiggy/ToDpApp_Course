var firstName = 'John';

function addLastName(){
  var lastName = 'Jinbo';
  var fullName = firstName + ' ' + lastName;
  var firstName = 'David';        //#A
  console.log(fullName);
}

addLastName();

/*
這個程式會輸出“undefined Jinbo”，奇怪了！照理來說應該是“John Jinbo”才對啊？！
這是因為你在#A重新宣告了一個屬於local的firstName變數，
javascript有一個特性叫做variable hoisting，這表示他會在每個scope的前端就做好變數宣告。
所以上面這段程式碼在js parser的眼中會像variable-02一樣。
*/
