
let wsock = null;
let menuState = {};

function sendMsg(jsonMsg){
    wsock.send(JSON.stringify(jsonMsg));
}

let fxWorker = new Worker("assets/js/fxnetworker.js")
fxWorker.onmessage = function(_){
    if(wsock == null || wsock.readyState != 1) return;
    sendMsg({
        "fx_msg_type": "fx_poll"
    });
}

function resetSock(){
    if(wsock != null){
        if(wsock.readyState != 3) wsock.close();
        wsock = null;
    }
}

function setConnStatus(color, message){
    const conn_status = document.getElementById("conn_status");
    conn_status.style = "color:" + color + ";";
    conn_status.textContent = message;
}

function setConnError(message){
    setConnStatus("red", message);
    resetSock();
}

function setModuleListVisible(sectionName, isVisible){

    const moduleList = document.getElementById("fx_module_list " + sectionName);
    if(moduleList == null) return;

    moduleList.setAttribute("selected", isVisible);

}

function onClickSection(event){

    if(menuState.cur_section != null) setModuleListVisible(menuState.cur_section, false);

    if(event.target.getAttribute("selected") == "true"){
        event.target.setAttribute("selected", "false");
        menuState.cur_section = null;
        return;
    }

    const sections = document.getElementsByClassName("fx_section");

    for(let i = 0; i < sections.length; i++) sections[i].setAttribute("selected", "false");

    event.target.setAttribute("selected", "true");
    menuState.cur_section = event.target.innerHTML;

    setModuleListVisible(menuState.cur_section, true);

}

function onClickModule(event){

    const sectionId = Number(event.target.getAttribute("section_id"));
    const sectModuleId = Number(event.target.getAttribute("section_module_id"));

    const module = menuState.sections[sectionId].modules[sectModuleId];
    if(module.enablable_type == 0) return;

    module.enabled^=1;

    sendMsg({
        "fx_msg_type": "fx_update_module_state",
        "name": module.name,
        "enabled": module.enabled
    });

    if(module.enablable_type != 1) module.enabled = 0;

    event.target.setAttribute("enabled", Boolean(module.enabled));
    
}

function resetMenuInfo(){

    const sectionList = document.getElementById("fx_section_list");
    sectionList.innerHTML = "";

    const moduleLists = document.getElementById("fx_module_lists");
    moduleLists.innerHTML = "";
    
    menuState = {};

}

function updateMenuInfo(msg){
    if(msg.fx_msg_type == "fx_initial_state"){

        resetMenuInfo();

        const sectionList = document.getElementById("fx_section_list");
        const moduleLists = document.getElementById("fx_module_lists");

        for (let i = 0; i < msg.sections.length; i++) {

            const section = msg.sections[i];
            
            const sectionEntry = document.createElement("li");   

            sectionEntry.className = "list-group-item fx_section";
            sectionEntry.innerHTML = section.name;
            sectionEntry.setAttribute("selected", "false")
            sectionEntry.onclick = onClickSection;

            sectionList.appendChild(sectionEntry);

            const moduleList = document.createElement("ul");
            moduleList.className = "list-group fx_module_list";
            moduleList.setAttribute("id", "fx_module_list " + section.name);
            moduleList.setAttribute("selected", "false");

            for(let j = 0; j < section.modules.length; j++){

                const module = section.modules[j];
                
                const moduleEntry = document.createElement("li");   

                moduleEntry.className = "list-group-item fx_module";
                moduleEntry.innerHTML = module.name;
                moduleEntry.setAttribute("id", "fx_module " + module.name);
                moduleEntry.setAttribute("enabled", module.enabled);
                moduleEntry.setAttribute("enablable_type", module.enablable_type);
                moduleEntry.setAttribute("section_id", i);
                moduleEntry.setAttribute("section_module_id", j);
                moduleEntry.onclick = onClickModule;

                moduleList.append(moduleEntry);

            }

            moduleLists.appendChild(moduleList);

        }

        menuState = JSON.parse(JSON.stringify(msg));
        delete menuState.fx_msg_type;
        menuState.cur_section = null;

        menuState.mod_name_to_mod = {};

        for (let i = 0; i < msg.sections.length; i++) {

            const section = msg.sections[i];

            for(let j = 0; j < section.modules.length; j++){

                const module = section.modules[j];
                
                menuState.mod_name_to_mod[module.name] = module;

            }

        }
        
    } else if(msg.fx_msg_type == "fx_state"){

        for (let i = 0; i < msg.sections.length; i++) {

            const section = msg.sections[i];

            for(let j = 0; j < section.modules.length; j++){

                const updateInfo = section.modules[j];
                const module = menuState.mod_name_to_mod[updateInfo.name];

                for (let k of Object.keys(updateInfo)) module[k] = updateInfo[k];

                const element = document.getElementById("fx_module " + module.name);
                if(element == null) continue;

                element.setAttribute("enabled", module.enabled);

            }

        }

    }

}

function onConnect(){

    resetSock();

    setConnStatus("cyan", "Connecting...");

    const port = document.getElementById("client_port_holder").value;
    const fx_ip = document.getElementById("fx_ip_holder").value;
    const fx_port = document.getElementById("fx_port_holder").value;
    const fx_pwd = document.getElementById("fx_pwd_holder").value;

    localStorage.setItem("netctrl_client_port", port);
    localStorage.setItem("netctrl_fx_ip", fx_ip);
    localStorage.setItem("netctrl_fx_port", fx_port);
    localStorage.setItem("netctrl_fx_pwd", fx_pwd);

    wsock = new WebSocket("ws://localhost:" + port);

    wsock.onopen = (event) => {
        sendMsg({
            "fx_msg_type": "login",
            "fx_ip": fx_ip,
            "fx_port": fx_port,
            "fx_pwd": fx_pwd
        });
    };

    wsock.onmessage = (event) => {
        
        const msg = JSON.parse(event.data);

        switch(msg.fx_msg_type){
        case "fatal_error":
            setConnError(msg.error);
            resetSock();
            resetMenuInfo();
            break;
        case "fx_initial_state":
            setConnStatus("lime", "Connected!");
            updateMenuInfo(msg)
            break;
        case "fx_state":
            updateMenuInfo(msg)
            break;
        default:
            console.log("Unknown event: " + msg.fx_msg_type);
            break;
        }

    };
    wsock.onclose = (event) => {
        setConnError("Connection closed.");
        resetSock();
        resetMenuInfo();
    }
    wsock.onerror = (event) => {
        if (event.code == 3001) {
            setConnError("Connection closed.");
            resetSock();
        } else {
            setConnError("Connection error!");
            resetSock();
        }
        resetMenuInfo();
    };

}

$(document).ready(async function() {
    
    const savedClientPort = localStorage.getItem("netctrl_client_port");
    const savedFxIp = localStorage.getItem("netctrl_fx_ip");
    const savedFxPort = localStorage.getItem("netctrl_fx_port");
    const savedFxPwd = localStorage.getItem("netctrl_fx_pwd");

    if(savedClientPort != null) document.getElementById("client_port_holder").value = savedClientPort;
    if(savedFxIp != null) document.getElementById("fx_ip_holder").value = savedFxIp;
    if(savedFxPort != null) document.getElementById("fx_port_holder").value = savedFxPort;
    if(savedFxPwd != null) document.getElementById("fx_pwd_holder").value = savedFxPwd;

	document.getElementById("conn_btn").onclick = onConnect;

    resetMenuInfo();

});