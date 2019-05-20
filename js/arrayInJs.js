function checkSubmit() {
	var name = document.getElementById('box').value;
	var gender;
	if(name == ''){
		document.getElementById('name').innerHTML ="please, enter again"
	} else{
		document.getElementById('name').innerHTML ='';
	}
}