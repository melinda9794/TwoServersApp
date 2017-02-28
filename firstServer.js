//import our http module
var http = require("http");

//define a port to listen to
var port =7000;

// function to handle requests
function handleRequest(request, response) {
	response.end("You're looking mighty spectacular today!" + request.url);
}

var server = http.createServer(handleRequest);

//start server so it can begin listening
server.listen(port, function(){
	//server now listening
		console.log("server listening on: http://localhost:%s", port);
});

