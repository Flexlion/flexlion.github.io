$(document).ready(async function() {
	const urlParams = new URLSearchParams(window.location.search);

	const oauth = urlParams.get('code');
	if(oauth == null){
		redirectLogin();
		return;
	}

	const response = await fetch('https://flexlion3.herokuapp.com/login', {
			method: "POST", 
			body: JSON.stringify({"oauth": oauth})
	});
	
	result = await response.json();

	const errorItem = document.getElementById("login_error");
	if('error' in result){
		errorItem.textContent = result['error'];
		await new Promise(r => setTimeout(r, 2000));
		redirectHome();
		return;
	}

	if("token" in result) setFxToken(result["token"]);
	redirectAccount();
});

  