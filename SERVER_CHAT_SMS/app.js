var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
server.listen(process.env.PORT || 4000);

var mangUsernames = [];

// hàm yêu cầu Server lắng nghe
io.sockets.on('connection', function (socket) {

  console.log("Co nguoi connect ne");

  socket.on('client-gui-username', function (data) {
  	console.log("Clien vừa đăng ký thông tin username: "+data);

  	var ketqua = false;
  	if(mangUsernames.indexOf(data)>-1){
  		ketqua = false;
  	} 
  	else{
  		mangUsernames.push(data);
  		socket.un = data;
  		ketqua = true;
  		io.sockets.emit('server-gui-username', { danhsach: mangUsernames });
  	}
  	
	// emit tới máy nguoi vừa gửi
	socket.emit('ketQuaDangKy', { noidung: ketqua });


	// emit toi tat ca moi nguoi
	//io.sockets.emit('server-gui-amthanh', { noidung: data });
	
  });


  socket.on('client-gui-tinchat', function(noidungchat){
  	io.sockets.emit('server-gui-tinchat', { tinchat: socket.un+": "+noidungchat });
  });
    
});