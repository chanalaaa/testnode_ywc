var http = require('http');
var port = 3000
function handleRequest (request,response){
	//console.log(request.headers) //show headers
	//response.end(`Hello fist server: ${request.url}`)
	//response.end('<b> test bold <b>')
	//response.end(200,{'content-type':'text/plain'})
	if(request.url == '/hello'){
		response.end('hello')
	}else{
		response.end(`Invalid url: ${request.url}`)
	}
}

var server = http.createServer(handleRequest)

server.listen(port,function(){
	console.log(`server listening on http://localhost:${port}`)
})