var http = require('http');
var port = 3000
function handleRequest (request,response){
	response.end(`Hello fist server: ${request.url}`)
}

var server = http.createServer(handleRequest)

server.listen(port,function(){
	console.log(`server listening on http://localhost:${port}`)
})