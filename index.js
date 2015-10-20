var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendfile(__dirname + "/quadface.html");
});

app.use("/", express.static(__dirname + '/'));

http.listen(3000, function(){
	console.log("Listening on port 3000");
});