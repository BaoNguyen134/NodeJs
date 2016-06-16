function tinhTong(a,b){
	return a+b;
}
var x=tinhTong(5,5);
console.log(x);

//==============================
function hello(){
	console.log("Xin chào mọi người!");
}

function goiHam(fn){
	fn();
}

goiHam(hello);

//==============================
var tong = function(){
	console.log("Lập trình nodejs");
}
tong();