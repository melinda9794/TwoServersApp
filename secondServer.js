//import our http module
var http = require("http");

//define a port to listen to
var port =7500;

// function to handle requests
function handleRequest(request, response) {
	response.end("Has your nose always looked like that?" + request.url);
}

var server = http.createServer(handleRequest);

//start server so it can begin listening
server.listen(port, function(){
	//server now listening
		console.log("server listening on: http://localhost:%s", port);
});