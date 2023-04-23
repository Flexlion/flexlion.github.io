var UserInfo;

function onGetToken(){
    downloadFile(getFxToken(), "fxtoken.epic", "text/plain");
}

async function updateUserInfo(){
    const cloudsaveToggle = document.getElementById("cloud_save_toggle");
    if(UserInfo["cloudsave"]) cloudsaveToggle.textContent = "Disable CloudSave";
    else cloudsaveToggle.textContent = "Enable CloudSave";
}

async function onToggleCloudSave(){

    const resultItem = document.getElementById("cloud_save_toggle_result");
    resultItem.textContent = "";

    const fxtoken = getFxToken();
    if(fxtoken == null) return;

    if(UserInfo == null) UserInfo = {};
    if (!("cloudsave" in UserInfo)) UserInfo["cloudsave"] = 1;
    UserInfo["cloudsave"]^=1;

    const response = await fetch('https://flexlion3.herokuapp.com/update_userinfo', {
		method: "POST", 
        body: JSON.stringify({"cloudsave": UserInfo["cloudsave"]}),
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
    
    if(UserInfo["cloudsave"]) resultItem.textContent = "Successfully enabled cloudsave!";
    else resultItem.textContent = "Successfully disabled cloudsave!";
    updateUserInfo();
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

$(document).ready(async function() {
    const fxtoken = getFxToken();
    if(fxtoken == null){
        redirectLogin();
        return;
    }
    const response = await fetch('https://flexlion3.herokuapp.com/user_info', {
		method: "GET", 
		headers: {
            'authorization': getFxToken()
        }
	});
    let result = await response.json();
    if('error' in result) return;
    UserInfo = result;
    updateUserInfo();
});

    