document.getElementById("id1").innerHTML = "script1";

var obj = new XMLHttpRequest();
var str = "";

obj.open("GET","https://lm4183-0.github.io/test.csv",true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		str = obj.responseText;
		document.getElementById("id1").innerHTML = str;
	}
};
obj.send(null);
