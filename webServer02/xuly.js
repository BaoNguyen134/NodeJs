var http = require("http");

var fs = require("fs");

http.createServer(function(req,res){
	
	/*WEB SERVER HTML*/
	//res.writeHead(200, {"Content-Type":"text/html"});
	// var data = fs.readFileSync(__dirname+"/index.html","utf-8");
	// data = data.replace("{Hello}","Xin Chào");
	// res.end(data);

	/*WEB SERVER PIPE*/
	//res.writeHead(200, {"Content-Type":"text/html"});
	//fs.createReadStream(__dirname+"/index.html").pipe(res);

	/*WEB SERVER JSON*/
	res.writeHead(200, {"Content-Type":"application/json"});
	var obj = {
		ho : "Nguyễn",
		ten : "Bảo",
		namsinh : 1993
	};

	res.end( JSON.stringify(obj));

}).listen(7777);