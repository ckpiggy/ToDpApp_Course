var fs = require('fs');

try{
  var data = fs.readFileSync('content.txt', 'utf-8');
  console.log(data);
}catch(err){
  console.error(err);
}

console.log('end of this file');
