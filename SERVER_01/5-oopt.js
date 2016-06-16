var person = {
	ho: "Nguyễn",
	ten: "Bảo",
	chaomung: function(){
		console.log("chào bạn: "+this.ho+" "+this.ten);
	}
}
person.chaomung();
console.log(person["ten"]);