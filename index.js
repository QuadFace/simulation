var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile(__dirname + "/quadface.html");
});

app.use("/", express.static(__dirname + '/'));

io.on('connection',function(socket){
	console.log('Someone connected');
});

setInterval(function(){
	io.emit("data", 10);
}, 1000);

http.listen(3000, function(){
	console.log("Listening on port 3000");
});