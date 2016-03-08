var http = require('http');

var server = new http.Server();

server.on('request', function(req, res){
  console.log('recieve a ' + req.method + ' request');
  console.log('which request the path ' + req.url);
  res.end();
});


server.listen(3001);
console.log('server is listening at port 3001');
