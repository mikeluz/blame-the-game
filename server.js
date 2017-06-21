var http = require('http');
var server = http.createServer();

server.on('request', require('./app'));

server.listen((process.env.PORT || 5000), function () {
	console.log('Server is listening on port 3001!');
});