document.getElementById("test3").innerHTML = "str3";
document.getElementById("test4").innerHTML = str4;

var obj = new XMLHttpRequest();
var str = "";

obj.open("GET","https://lm4183-0.github.io/test.csv",true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		str = obj.responseText;
		document.getElementById("test2").innerHTML = "str2";
		document.getElementById("test1").innerHTML = str;
};
obj.send(null);
