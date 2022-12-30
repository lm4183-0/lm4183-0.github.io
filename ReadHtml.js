var obj = new XMLHttpRequest();
var str = obj.responseText;
obj.open('GET','test.csv',true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		document.getElementById("https://lm4183-0.github.io/test").innerHTML = str;
	}
};

obj.send(null);
