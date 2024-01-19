let WeaponInfoMain;
let GearInfoHead;
let GearInfoClothes;
let GearInfoShoes;
let BottomInfo;
let HairInfo;
let EyebrowInfo;
let VersusSceneInfo;
let langEUen;

let sessionInfo = {};
let playerInfos = [];
let defaultPlayerInfo = {"sett_rsdb": {}, "sett_clickable": {}, "name": "", "anim": "Tstance", "color": {"r": 1.0, "g": 1.0, "b": 1.0, "a": 1.0}};
let curPlayer = -1;
let playerNum = 1;
const maxPlayerNum = 10;

async function onLoadCalicoConfig(configData){

    const zipConfig = await JSZip.loadAsync(configData);
    
    const sessionConfig = JSON.parse(await zipConfig.file("PhotoForCalico/SessionConfig.json").async("string"));
    const playerConfig = JSON.parse(await zipConfig.file("PhotoForCalico/PlayerConfig.json").async("string"));

    sessionInfo["vs_map"] = getRsdbInfoByName(VersusSceneInfo, sessionConfig["map_name"])["Id"];
    document.getElementById("chosenEnvTime").checked = sessionConfig["env_time"] == 2;
    onRsdbEntrySelect(getElementByRsdbId("vs_map", sessionInfo["vs_map"]));

    curPlayer = 0;

    playerNum = 0;

    for(let name of Object.keys(playerConfig)){
        
        const info = playerInfos[playerNum++];
        const pinfo = playerConfig[name];
        
        info["name"] = name;
        info["anim"] = pinfo["anim_name"];
        info["sett_clickable"]["player_playertype"] = pinfo["player_type"].toString();
        info["sett_clickable"]["player_hair"] = pinfo["hair"].toString();
        info["sett_clickable"]["player_skintone"] = pinfo["skin_tone"].toString();
        info["sett_clickable"]["player_eyebrow"] = pinfo["eye_brows"].toString();
        info["sett_clickable"]["player_eyecolor"] = pinfo["eye_color"].toString();
        info["sett_rsdb"]["player_headgear"] = pinfo["gear_head"].toString();
        info["sett_rsdb"]["player_clothes"] = pinfo["gear_cloth"].toString();
        info["sett_rsdb"]["player_shoes"] = pinfo["gear_shoes"].toString();
        info["sett_rsdb"]["player_weapon"] = pinfo["weapon_main"].toString();
        if(pinfo.hasOwnProperty("color")){
            info["color"] = {
                "r": Math.pow(pinfo["color"].r, 1.0 / 2.2),
                "g": Math.pow(pinfo["color"].g, 1.0 / 2.2),
                "b": Math.pow(pinfo["color"].b, 1.0 / 2.2),
                "a": 1.0
            };
        }
        else{
            for (const [key, value] of Object.entries(defaultPlayerInfo["color"])) info["color"][key] = value;
        }
        
    }

    document.getElementById('player_id_holder').setAttribute("max", playerNum);
    document.getElementById("player_id_holder").value = curPlayer + 1;
    document.getElementById("player_num_holder").value = playerNum;

    onPlayerChange(curPlayer);

}

function downloadConfig(){
    let zip = new JSZip();

    let sessionConfig = {"map_name": getRsdbInfoById(VersusSceneInfo, sessionInfo["vs_map"])["__RowId"], "env_time": Number(document.getElementById("chosenEnvTime").checked) * 2};
    zip.file('PhotoForCalico/SessionConfig.json', JSON.stringify(sessionConfig, null, 2));

    let playerConfig = {};
    for(let i = 0; i < playerNum; i++){
        let info = playerInfos[i];
        while(info["name"] in playerConfig) info["name"]+="0";
        playerConfig[info["name"]] = {
            "player_type": Number(info["sett_clickable"]["player_playertype"]), 
            "hair": Number(info["sett_clickable"]["player_hair"]),
            "bottom": Number(info["sett_clickable"]["player_bottom"]),
            "skin_tone": Number(info["sett_clickable"]["player_skintone"]),
            "eye_brows": Number(info["sett_clickable"]["player_eyebrow"]),
            "eye_color": Number(info["sett_clickable"]["player_eyecolor"]),
            "gear_head": Number(info["sett_rsdb"]["player_headgear"]),
            "gear_cloth": Number(info["sett_rsdb"]["player_clothes"]),
            "gear_shoes": Number(info["sett_rsdb"]["player_shoes"]),
            "weapon_main": Number(info["sett_rsdb"]["player_weapon"]),
            "anim_name": info["anim"],
            "color": {
                "r": Math.pow(info["color"].r, 2.2),
                "g": Math.pow(info["color"].g, 2.2),
                "b": Math.pow(info["color"].b, 2.2),
                "a": 1.0
            }
        }
    }
    zip.file('PhotoForCalico/PlayerConfig.json', JSON.stringify(playerConfig, null, 2));
    zip.generateAsync({
        type: "base64"
    }).then(function(content) {
            window.location.href = "data:application/zip;base64," + content;
    });    
}

function click_player_sett(target)
{

    if(target == null) return;

    let className = target.getAttribute("class");
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("selected", "false");
    }
    target.setAttribute("selected", "true");
    
    if(curPlayer != -1) playerInfos[curPlayer]["sett_clickable"][className] = target.getAttribute("rsdb_id");
    else defaultPlayerInfo["sett_clickable"][className] = target.getAttribute("rsdb_id");

    if(className == "player_playertype") onChangePlayerType(target.getAttribute("rsdb_id"));
};

function click_player_sett_event(event)
{
    click_player_sett(event.target);
};

function updateAnimIcon(player_anim_list, anim_icon){
    anim_icon.src = "./assets/img/player/animations/" + player_anim_list.value + '.png';
}

async function loadAnims(url) {
    
    const player_anim_list = document.getElementById('player_anim_list');

    let response = await fetch(url);
    let data = await response.text();

    let lines = data.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let option = document.createElement("option");
        option.text = lines[i];
        player_anim_list.add(option);
    }

    const anim_icon = document.getElementById('player_anim_icon');

    updateAnimIcon(player_anim_list, anim_icon);
    player_anim_list.addEventListener('change', () => {
        updateAnimIcon(player_anim_list, anim_icon);
    });
};

function onRsdbEntrySelect(target){
    if(target == null) return;
    
    let className = target.getAttribute("class");
    
    document.getElementById(target.getAttribute('resultImg')).setAttribute('src', target.src);
    let info = document.getElementById(target.getAttribute('resultInfo'));
    info.setAttribute("rsdb_id", target.getAttribute("rsdb_id"));
    info.textContent = target.alt;

    let rsdb_id = target.getAttribute("rsdb_id");
    if(info.getAttribute("player_specific") == "true"){
        if(curPlayer != -1) playerInfos[curPlayer]["sett_rsdb"][className] = rsdb_id;
        else defaultPlayerInfo["sett_rsdb"][className] = rsdb_id;
    } else sessionInfo[className] = rsdb_id;
}

function onPlayerChange(id){
    if(id >= maxPlayerNum){
        console.error("wtf");
        return;
    }
    curPlayer = id;
    const info = playerInfos[curPlayer];
    document.getElementById('player_id_holder').value = curPlayer + 1;
    for (const [key, value] of Object.entries(info["sett_rsdb"])) onRsdbEntrySelect(getElementByRsdbId(key, value));
    for (const [key, value] of Object.entries(info["sett_clickable"])) click_player_sett(getElementByRsdbId(key, value));
    document.getElementById('player_name_holder').value = info["name"];

    const player_anim_list = document.getElementById("player_anim_list");
    player_anim_list.value = info["anim"];
    updateAnimIcon(player_anim_list, document.getElementById('player_anim_icon'));

    let r = Math.round(info["color"].r * 255).toString(16);
    let g = Math.round(info["color"].g * 255).toString(16);
    let b = Math.round(info["color"].b * 255).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    document.getElementById("player_color_holder").value = "#" + r + g + b;
}

function onPlayersCreate(){
    for(let i = 0; i < maxPlayerNum; i++){
        playerInfos.push({"sett_rsdb": {}, "sett_clickable": {}, "name": defaultPlayerInfo["name"], "anim": defaultPlayerInfo["anim"], "color": {}});
        for (const [key, value] of Object.entries(defaultPlayerInfo["sett_rsdb"])) playerInfos[i]["sett_rsdb"][key] = value;
        for (const [key, value] of Object.entries(defaultPlayerInfo["sett_clickable"])) playerInfos[i]["sett_clickable"][key] = value;
        for (const [key, value] of Object.entries(defaultPlayerInfo["color"])) playerInfos[i]["color"][key] = value;
    }
}

function buildRsdbSelector(modalName, rsdbInfos, entryPerLine, getCodeNameFunc, getNameFunc, classNameGallery, classNameImg, getImgUrlFunc, defaultImgUrl, width, height, resultImg, resultInfo){
    let modalBody = document.getElementById(modalName).getElementsByClassName("modal-body")[0];

    for(let i = 0; i < rsdbInfos.length / entryPerLine; i++){

        let gallery = document.createElement("div");
        gallery.setAttribute("class", classNameGallery);

        for(let idx = i * entryPerLine; idx < Math.min((i + 1) * entryPerLine, rsdbInfos.length); idx++){
            let entry = new Image();

            let codeName = getCodeNameFunc(rsdbInfos[idx]);
            entry.alt = getNameFunc(codeName);
            entry.src = getImgUrlFunc(codeName);

            entry.setAttribute("rsdb_id", rsdbInfos[idx]["Id"]);
            entry.setAttribute("default_url", defaultImgUrl);

            entry.onerror = function(event){
                let target = event.target;
                target.src = target.getAttribute("default_url"); // No Icon
            };
            entry.addEventListener('click', (event) => {
                let target = event.target;
                onRsdbEntrySelect(target);
            });
            entry.setAttribute("width", width);
            entry.setAttribute("height", height);
            entry.setAttribute("resultImg", resultImg);
            entry.setAttribute("resultInfo", resultInfo);
            entry.setAttribute("class", classNameImg);
            entry.setAttribute("data-bs-dismiss", "modal");
            gallery.appendChild(entry);

            if(idx == 0) onRsdbEntrySelect(entry);
        }
        modalBody.appendChild(gallery);
    }
}

function loadMaps(){
    let mapNames = langEUen["CommonMsg/VS/VSStageName"];
    buildRsdbSelector(
        "modalMap", 
        VersusSceneInfo, 
        4, 
        info => {
            let mapName = info["__RowId"].slice(4);
            if(/\d$/.test(mapName)) mapName = mapName.slice(0, mapName.length - 2);
            return mapName;
        },
        codeName => {
            if(codeName in mapNames) return mapNames[codeName];
            return codeName;
        },
        "image_gallery_map",
        "vs_map",
        codeName => {
            return "./assets/img/stage/Vss_" + codeName + ".png";
        },
        './assets/img/stage/Dummy.png',
        160,
        90,
        "chosenMapImg",
        "chosenMapInfo"
    )
};

function loadWeapons(){
    let validInfos = [];
    for(let i = 0; i < WeaponInfoMain.length; i++){
        if(WeaponInfoMain[i]["Type"] != "Versus" && WeaponInfoMain[i]["__RowId"] != "Free") continue; // Only add obtainable weapons
        validInfos.push(WeaponInfoMain[i]);
    }
    let weaponNames = langEUen["CommonMsg/Weapon/WeaponName_Main"];
    buildRsdbSelector(
        "modalWpn", 
        validInfos, 
        6, 
        info => {
            return info["__RowId"];
        },
        codeName => {
            if(codeName in weaponNames) return weaponNames[codeName];
            return codeName;
        },
        "image_gallery_weapon",
        "player_weapon",
        codeName => {
            return "./assets/img/player/weapon/Wst_" + codeName + ".png"
        },
        './assets/img/player/weapon/Dummy.png',
        90,
        90,
        "chosenWeaponImg",
        "chosenWeaponInfo"
    )
};

function loadGear(modalName, GearInfo, langFileName, className, resultImg, resultInfo){
    let gearNames = langEUen[langFileName];
    buildRsdbSelector(
        modalName, 
        GearInfo, 
        6, 
        info => {
            return info["__RowId"];
        },
        codeName => {
            let name = codeName.slice(4);
            if(name in gearNames) return gearNames[name];
            return name;
        },
        "image_gallery_gear",
        className,
        codeName => {
            return "./assets/img/player/gear/" + codeName + ".png"
        },
        './assets/img/player/gear/Dummy.png',
        90,
        90,
        resultImg,
        resultInfo
    )
};

function load_options(){
    loadMaps();
    loadWeapons();
    loadGear("modalHed", GearInfoHead, "CommonMsg/Gear/GearName_Head", "player_headgear", "chosenHedImg", "chosenHedInfo");
    loadGear("modalClt", GearInfoClothes, "CommonMsg/Gear/GearName_Clothes", "player_clothes", "chosenCltImg", "chosenCltInfo");
    loadGear("modalShs", GearInfoShoes, "CommonMsg/Gear/GearName_Shoes", "player_shoes", "chosenShsImg", "chosenShsInfo");
    loadAnims("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/animations.txt");
    loadSkinTones();
    loadEyeColors();
    loadHairs();
    loadEyebrows();
    loadPants();

    $('.player_playertype').click(click_player_sett_event);
    $('.player_skintone').click(click_player_sett_event);
    $('.player_eyecolor').click(click_player_sett_event);
    $('.player_hair').click(click_player_sett_event);
    $('.player_eyebrow').click(click_player_sett_event);
    $('.player_bottom').click(click_player_sett_event);
    $('.player_name_holder').on("propertychange change click keyup input paste", function(event){
        let name_holder = event.target;
        playerInfos[curPlayer]["name"] = name_holder.value;
    });
    $('.player_anim_list').on("propertychange change click keyup input paste", function(event){
        let anim_holder = event.target;
        playerInfos[curPlayer]["anim"] = anim_holder.value;
    });
    $('.player_color_holder').on("propertychange change click keyup input paste", function(event){
        let color = event.target.value;
        playerInfos[curPlayer]["color"] = {
            "r": parseInt(color.substr(1,2), 16) / 255,
            "g": parseInt(color.substr(3,2), 16) / 255,
            "b": parseInt(color.substr(5,2), 16) / 255,
            "a": 1.0
        }
    });
    click_player_sett(document.getElementsByClassName('player_playertype')[0]);
    click_player_sett(document.getElementsByClassName('player_skintone')[0]);
    click_player_sett(document.getElementsByClassName('player_eyecolor')[0]);
    click_player_sett(document.getElementsByClassName('player_hair')[0]);
    click_player_sett(document.getElementsByClassName('player_eyebrow')[0]);
    click_player_sett(document.getElementsByClassName('player_bottom')[0]);

    onPlayersCreate();
    onPlayerChange(0);
    
    $('.player_num_holder').on("propertychange change click keyup input paste", function(event){
        let num_holder = event.target;
        if(num_holder.value != playerNum){
            playerNum = num_holder.value;
            document.getElementById('player_id_holder').setAttribute("max", playerNum);
            if(curPlayer >= playerNum) onPlayerChange(playerNum - 1);
        };
    });
    $('.player_id_holder').on("propertychange change click keyup input paste", function(event){
        let id_holder = event.target;
        if(id_holder.value - 1 != curPlayer) onPlayerChange(id_holder.value - 1);
    });
};

$(document).ready(async () => {
    await Promise.all([
        (async () => { langEUen = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/lang/EUen.json") })(),
        (async () => { WeaponInfoMain = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/WeaponInfoMain.json") })(),
        (async () => { VersusSceneInfo =    await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/VersusSceneInfo.json") })(),
        (async () => { GearInfoHead = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoHead.json") })(),
        (async () => { GearInfoClothes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoClothes.json") })(),
        (async () => { GearInfoShoes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoShoes.json") })(),
        (async () => { HairInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/HairInfo.json") })(),
        (async () => { EyebrowInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/EyebrowInfo.json") })(),
        (async () => { BottomInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/BottomInfo.json") })(),
    ]);
    await load_options();
});
