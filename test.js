var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/tty.usbmodem1411", {
  baudrate: 9600,
  stopbits: 1,
  databits: 7
});

var buffer = "";

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    buffer += data;
    if (data.toString().indexOf("\n") > -1) {
    	console.log(buffer);
    	buffer = "";
    };

  });
});