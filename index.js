var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendfile(__dirname + "/quadface.html");
});

app.use("/css", express.static(__dirname + '/css'));

app.use("/assets", express.static(__dirname + '/assets'));

http.listen(3000, function(){
	console.log("Listening on port 3000");
});