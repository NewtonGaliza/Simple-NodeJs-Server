var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'texxt/plain });
    res.end('Hello Node');
});

server.listen(3000, '127.0.0.1');
console.log('Simple Node Server');
