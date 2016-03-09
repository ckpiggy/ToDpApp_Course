for(var i = 0; i < 3; i++){
  console.log(i);
}
console.log(i * 10);
/*
這段程式碼的行為大大出乎我們的預料，
還記得之前談過的scope嗎？你應該猜到了，i其實被宣告為全域變數。
js parser會把以上的程式碼當成以下的程式碼。
再次提醒，千萬不要在if或是for,while等block中宣告變數！
*/

var i;
for(i = 0; i < 3; i ++){
  console.log(i);
}
console.log(i * 10);
