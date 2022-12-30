var obj = new XMLHttpRequest();
var str = obj.responseText;
obj.open('GET','https://lm4183-0.github.io/test.csv',true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		document.getElementById("test").innerHTML = str;
	}
};

obj.send(null);
