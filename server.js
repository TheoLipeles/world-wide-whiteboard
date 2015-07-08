var path = require('path');
var socketio = require('socket.io');
var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

server.on('request', app);

var io = socketio.listen(server);

io.on('connection', function(socket) {
	console.log("A new client has connected");
	console.log(socket.id);


	socket.on("draw", function(start, end, strokeColor) {
		socket.broadcast.emit("draw", start, end, strokeColor);
		socket.emit("draw", start, end, strokeColor);
	});
});

server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});