function onGetToken(){
    downloadFile(getFxToken(), "fxtoken.epic", "text/plain");
}

async function onToggleCloudSave(val){
    const resultItem = document.getElementById("cloud_save_updateconfig_result");
    resultItem.textContent = "";

    const fxtoken = getFxToken();
    if(fxtoken == null) return;

    const response = await fetch('https://flexlion3.herokuapp.com/save/set_config', {
		method: "POST", 
        body: JSON.stringify({"cloudsave": val}),
		headers: {
            'authorization': getFxToken()
        }
	});
    result = await response.json();

	if('error' in result){
		resultItem.textContent = result['error'];
        resultItem.setAttribute("style", "color:red");
		return;
	}
    
    if(val) resultItem.textContent = "Successfully enabled cloudsave!";
    else resultItem.textContent = "Successfully disabled cloudsave!";
    resultItem.setAttribute("style", "color:lime");
}

async function onResetToken(){
    const resultItem = document.getElementById("token_reset_result");
    resultItem.textContent = "";

    const fxtoken = getFxToken();
    if(fxtoken == null) return;

    const response = await fetch('https://flexlion3.herokuapp.com/update_token', {
		method: "GET", 
		headers: {
            'authorization': getFxToken()
        }
	});
    result = await response.json();

	if('error' in result){
		resultItem.textContent = result['error'];
        resultItem.setAttribute("style", "color:red");
		return;
	}

    setFxToken(result["token"]);
    resultItem.textContent = "Successfully reset token!";
    resultItem.setAttribute("style", "color:lime");
}

$(document).ready(function() {
    const fxtoken = getFxToken();
    if(fxtoken == null){
        redirectLogin();
        return;
    }
});

    