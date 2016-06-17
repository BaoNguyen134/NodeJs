var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(7777);

app.get("/",function (req, res) {
	//res.send("<font color=red>HELLO</font>");
	res.sendFile(__dirname+"/index.html")
});

app.get("/gioithieu.aspx",function (req, res) {
	//res.send("<font color=red>HELLO</font>");
	res.send("Xin Chào Bảo");
});

app.get("/tinhtong/:so1/:so2",function (req, res) {
	//res.send("<font color=red>HELLO</font>");
	var n = req.params.so1;
	n=parseInt(n);
	var k = req.params.so2;
	k=parseInt(k);
	var t = n+k;
	res.send("Kết Quả: "+t);
});