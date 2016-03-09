/*
js擁有兩種scope：
  1.global scope
  2.functional/local scope
和大多數靜態語言不同，js並不會用"{}"來劃分scope，
js的scope只有global和functional/local兩種，簡單來說，
只有“在function內與在function外"兩種!
*/

//scope-01

var firstName = "John";
function addLastName(){
  var lastName = "Jinbo";
  console.log(firstName + ' ' + lastName);
}
addLastName();
console.log(firstName + ' ' +lastName);

/*
上面這段程式碼應該會丟出error，因為我們在global scope呼叫了一個，
scope-02的程式碼針對這個情形作出了一些修正，但還是有些“怪怪”的感覺在裡面。
*/
