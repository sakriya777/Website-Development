

function registerform(){

	var user, pass, name, email;
	name=document.getElementById("name").value
	email=document.getElementById("email").value
	user=document.getElementById("user").value
	pass=document.getElementById("pass").value

	if((user=="" && pass=="") && (name=="" && email=="")){
	alert("Error Please fill all the fields");
	return false;
	}

	else if(name==''){
	alert("Error Please fill your name");
	return false;
	}

	else if(email==''){
	alert("Error Please fill your email");
	return false;
	}

	else if(user==''){
	alert("Error Please fill the user");
	return false;
	}

	else if(pass==''){
	alert("Error Please fill password");
	return false;
	}

	else{

	if(user=='admin' && pass=='admin')
		{
	window.location="home.html";
		}
		else{

			alert("User name and password mismatch");
	return false;

		}

		return false;

}

return;
}