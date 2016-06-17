var fs = require("fs");
var noidung = fs.readFileSync( __dirname+"/vanban.txt");

console.log(noidung);

console.log(noidung.toString());