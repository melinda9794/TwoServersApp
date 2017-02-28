//import our http module
var http = require("http");

//define a port to listen to
var port =1024;
var port2 = 7500;

// function to handle requests
function handleRequest(request, response) {
	response.end("You're looking mighty spectacular today!" + request.url + port);
}

var server = http.createServer(handleRequest);

//start server so it can begin listening
server.listen(port, function(){
	//server now listening
		console.log("server listening on: http://localhost:%s", port);
});

function handleRequest2(request, response) {
	response.end("Has your nose always looked like that?" + request.url + port);
}
var server2 = http.createServer(handleRequest2);

//start server so it can begin listening
server.listen(port2, function(){
	//server now listening
		console.log("server listening on: http://localhost:%s", port2);
});