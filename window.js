 

function openwindow(){
	
	document.getElementById("window").src = "openwindow.jpg";
	document.getElementById("header").innerHTML = "This is an Open Window!";
	
}
function closewindow (){
	
	document.getElementById("window").src = "closewindow.jpg";
	document.getElementById("header").innerHTML = "This is a Close Window!";
	
}
sayHi(" JULFA!");
saya();
sayb();
sayc();
 
function sayHi (name) {
	alert("Hi" + name);
}
function saya () {
	alert("BAKIT ANG PANGIT MO??"); 
}
function sayb () {
	alert("PAKEALAM MO BA!");
}
function sayc () {
	alert("EDI WOW!");
}