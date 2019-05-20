var now = new Date();
// localTime = now.toString();
// document.write("Local Time: "+ localTime + "<br/>");
function printDate(){
	var now = new Date();
	hours = now.getHours();
	mins = now.getMinutes();
	secs = now.getSeconds();
	document.getElementById('clock').style.color = "red";
	document.getElementById('clock').style.fontSize = "100px";
	document.getElementById('clock').innerHTML = hours + " :"+ mins +" : "+ secs ;
	window.setInterval(printDate,1000);
}
printDate();