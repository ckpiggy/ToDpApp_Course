var x = 5;

function test_block(){
  console.log(x);
  if (true) {
    var x = 1;
  }
}

test_block();

/*
許多語言都有block，用在if,else 或是迴圈上，通常在這些block之內都有自己的scope，
但是在js中block沒有自己的scope。雖然js允許你在這些block中宣告變數，請遵守之前提及的規則，

“在所有的scope頂端就宣告所有在scope中會出現的變數，並且留意重複出現的變數名稱”

*/
