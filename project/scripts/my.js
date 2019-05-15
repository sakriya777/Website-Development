//use admin as username and password inorder to login



function validateForm(){
	//alert("Validation Form");
	var user, pass;
	user=document.getElementById("user").value
	pass=document.getElementById("pass").value

	//alert("user = " + user + "password = " + pass);

if(user=="" && pass=="")
{
	alert("Error Please fill all the fiels");
	return false;
}

else if(user=='')
{
	alert("Error Please fill the user");
	return false;

}

else if(pass=='')
{
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






