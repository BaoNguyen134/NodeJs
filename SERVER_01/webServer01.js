var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type":"text/flain"});
	res.end("google.com<ul>HAHA</ul>");
}).listen(8888);