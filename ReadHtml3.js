document.getElementById("test").innerHTML = "str3";

obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		str = obj.responseText;
		document.getElementById("test2").innerHTML = "str";
		document.getElementById("test").innerHTML = str;
};
obj.send(null);
