var obj = new XMLHttpRequest();
var str = "";

obj.open('GET','./test.csv',true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		str = obj.responseText;
		document.getElementById("test").innerHTML = str;
	}
};
obj.send(null);
