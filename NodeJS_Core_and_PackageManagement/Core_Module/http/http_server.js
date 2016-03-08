var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Contnet-Type':'text/html'});
  res.write('<h1>Node.js</h1>');
  res.end('<p>hello world</p>');
});

server.listen(3000);
console.log('server is listening at port 3000');
