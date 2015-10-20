var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/tty.usbmodem1411", {
  baudrate: 9600,
  stopbits: 1,
  databits: 7
});

var buffer = "";

app.get('/', function(req, res){
	res.sendfile(__dirname + "/quadface.html");
});

app.use("/", express.static(__dirname + '/'));

io.on('connection',function(socket){
	console.log('Someone connected');
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    buffer += data;
    if (data.toString().indexOf("\n") > -1) {
    	io.emit("data", buffer);
    	buffer = "";
    };

  });
});

http.listen(3000, function(){
	console.log("Listening on port 3000");
});