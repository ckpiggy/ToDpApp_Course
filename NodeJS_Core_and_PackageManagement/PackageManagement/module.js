var name;

exports.setName = function(theName){
  name = theName;
};

exports.sayHello = function(){
  console.log('Hello '+name);
};

/*
你可以把這個套件視為一個singleton的物件，exports是這個物件的公開介面，
當我們可以在其他的程式用require來取得這個介面。
*/
