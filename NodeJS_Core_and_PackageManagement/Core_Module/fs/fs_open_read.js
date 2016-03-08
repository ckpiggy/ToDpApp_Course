var fs = require('fs');

fs.open('content.txt', 'r', function(err, fd){
  if (err) {
    console.error(err);
  }else {
    var buf = new Buffer(8); //Buffer是nodeJS的一種資料型態 Binary Array
    fs.read(fd, buf, 0, buf.length, null, function(err, byteRead, buffer){
      if (err) {
        console.error(err);
      }else{
        console.log('byteRead: ' + byteRead);
        console.log(buffer);
      }
    });
  }
});
