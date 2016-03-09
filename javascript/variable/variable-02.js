var firstName;
firstName = 'John';

function addLastName(){
  var lastName;
  var fullName;
  var firstName;
  lastName = 'Jinbo';
  fullName = firstName + ' ' + lastName;    //#B
  firstName = 'David';
  console.log(fullName);
}

addLastName();

/*
這樣看來輸出“undefined Jinbo”就不奇怪了吧！
也許你會覺得js寫出來之後有很多意想不到的行為發生，這是因為開發者不了解js parser到底幹了什麼，
類似所謂的"說者無心，聽者有意"的狀況，好在機器比人簡單多了，只要是前掌握好js的特性就可以避免寫出出乎你想像的行為。
所以請遵守

“在所有的scope頂端就宣告所有在scope中會出現的變數，並且留意重複出現的變數名稱”

*/
