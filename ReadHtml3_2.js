document.getElementById("test1").innerHTML = "str1";
document.getElementById("test4").innerHTML = str4;

var obj = new XMLHttpRequest();
var str = "";

obj.open("GET","https://lm4183-0.github.io/test.csv",true);
