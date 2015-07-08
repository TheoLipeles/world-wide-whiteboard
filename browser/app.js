
var socket = io(window.location.origin);


window.whiteboard.on("draw", function(start, end, strokeColor) {
	socket.emit("draw", start, end, strokeColor);
});


socket.on("connect", function() {
	console.log("It happened");
});

socket.on('disconnect', function() {
	console.log("don't go!");
});

socket.on('draw', function(start, end, strokeColor) {
	window.whiteboard.draw(start, end, strokeColor);
});