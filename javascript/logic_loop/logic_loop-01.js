/*
在js中有兩個比較方式==與===，請盡量使用===來做比較，
因為===除了會比較變數的值以外也會比較變數的型態。
*/
var number = '';
console.log(number == 0);
console.log(number === 0);
console.log();
number = 1;
console.log(number == '1');
console.log(number === '1');
