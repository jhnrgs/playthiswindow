 

function openwindow(){
	
	document.getElementById("window").src = "openwindow.jpg";
	document.getElementById("header").innerHTML = "This is an Open Window!";
	
}
function closewindow (){
	
	document.getElementById("window").src = "closewindow.jpg";
	document.getElementById("header").innerHTML = "This is a Close Window!";
	
}
sayHi(" HUMAN!");
saya();
sayb();
sayc();
 
function sayHi (name) {
	alert("HELLO " + name);
}
function saya () {
	alert("KAYA PA BA?"); 
}
function sayb () {
	alert("HOPING THIS THING CAN HELP.");
}
function sayc () {
	alert("HEHE");
}