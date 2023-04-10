var WeaponInfoMain;
var GearInfoHead;
var GearInfoClothes;
var GearInfoShoes;
var BottomInfo;
var HairInfo;
var EyebrowInfo;
var NameplateInfo;
var langEUen;

var SaveJson;
var SaveRaw;

var SaveEdits = {};

function click_clickable_sett(target)
{
    var className = target.getAttribute("class");
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute("selected", "false");
    }
    target.setAttribute("selected", "true");
};

function loadSave(){
    SaveEdits = {};
    document.getElementById("player_name_holder").value = SaveJson["server"]["UserName"];
	document.getElementById("player_identifier_holder").value = SaveJson["server"]["Identifier"];
	document.getElementById("player_rank_holder").value = SaveJson["server"]["PlayerRank"] + 1;
	document.getElementById("player_rank_exp_holder").value = SaveJson["server"]["PlayerRankExp"];
    document.getElementById("money_holder").value = SaveJson["server"]["Money"];
    document.getElementById("snail_holder").value = SaveJson["server"]["Shell"];
    var playerInfo = SaveJson["client"]["Common"]["Coordinates"];
    click_clickable_sett(getElementByRsdbId("player_playertype", playerInfo["ModelType"]));
    onChangePlayerType(playerInfo["ModelType"]);
    click_clickable_sett(getElementByRsdbId("player_skintone", playerInfo["SkinColor"]));
    click_clickable_sett(getElementByRsdbId("player_eyecolor", playerInfo["EyeColor"]));
    click_clickable_sett(getElementByRsdbId("player_hair", playerInfo["HairId"]));
    click_clickable_sett(getElementByRsdbId("player_eyebrow", playerInfo["Eyebrow"]));
    click_clickable_sett(getElementByRsdbId("player_bottom", playerInfo["BottomId"]));
}

async function onDecryptSave(){
    SaveRaw = document.getElementById("save_decrypt").files[0];
    const response = await fetch('https://flexlion3.herokuapp.com/save/decrypt', {
		method: "POST", 
		body: SaveRaw, 
		headers: {
			"Content-Type": "text/plain"
    	}
	});
    SaveJson = await response.json();
    const errorItem = document.getElementById("decrypt_error");
    if('error' in SaveJson){
      errorItem.textContent = SaveJson['error'];
      return;
    }
    errorItem.textContent = "";
    loadSave();
}

async function onEditSave(){
    let formData = new FormData();
    formData.append('save', SaveRaw);
    formData.append('edits', JSON.stringify(SaveEdits, null, 2));

    const response = await fetch('https://flexlion3.herokuapp.com/save/edit', {
		method: "POST", 
		body: formData
	});

    body = await response.blob();

    const errorItem = document.getElementById("edit_error");
    try {
        errorJson = JSON.parse(await body.text());
        errorItem.textContent = errorJson["error"];
    } catch(error){
        downloadFile(body, "save.dat", "text/plain");
        errorItem.textContent = "";
    }
}

async function load_options(){
    loadSkinTones();
    loadEyeColors();
    loadHairs();
    loadEyebrows();
    loadPants();

	$('.player_name_holder').on("propertychange change click keyup input paste", function(event){
        var name_holder = event.target;
        if(name_holder.value.length > 16) name_holder.value = name_holder.value.slice(0, 16);
        SaveEdits["player_name"] = name_holder.value;
    });
	$('.player_identifier_holder').on("propertychange change click keyup input paste", function(event){
        var id_holder = event.target;
        if(id_holder.value.length > 4) id_holder.value = id_holder.value.slice(0, 4);
        SaveEdits["player_identifier"] = id_holder.value;
    });
	$('.player_rank_holder').on("propertychange change click keyup input paste", function(event){
        var rank_holder = event.target;
        if(rank_holder.value > 99) rank_holder.value = 99;
        if(rank_holder.value < 1) rank_holder.value = 1;
        SaveEdits["player_rank"] = rank_holder.value - 1;
    });
	$('.player_rank_exp_holder').on("propertychange change click keyup input paste", function(event){
        SaveEdits["player_rank_exp"] = event.target.value;
    });
    $('.money_holder').on("propertychange change click keyup input paste", function(event){
        var money_holder = event.target;
        if(money_holder.value > 9999999) money_holder.value = 9999999;
        if(money_holder.value < 0) money_holder.value = 0;
        SaveEdits["money"] = money_holder.value;
    });
    $('.snail_holder').on("propertychange change click keyup input paste", function(event){
        var snail_holder = event.target;
        if(snail_holder.value > 999) snail_holder.value = 999;
        if(snail_holder.value < 0) snail_holder.value = 0;
        SaveEdits["snails"] = snail_holder.value;
    });
    $('.player_playertype').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_playertype"] = event.target.getAttribute("rsdb_id");
        onChangePlayerType(event.target.getAttribute("rsdb_id"));
    });
    $('.player_skintone').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_skintone"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_eyecolor').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_eyecolor"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_hair').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_hair"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_eyebrow').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_eyebrow"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_bottom').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["player_bottom"] = event.target.getAttribute("rsdb_id");
    });
}

$(document).ready(async () => {
    await Promise.all([
        (async () => { langEUen = await fetchJson("https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/data/language/EUen.json") })(),
        (async () => { WeaponInfoMain = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/WeaponInfoMain.json") })(),
        (async () => { GearInfoHead = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoHead.json") })(),
        (async () => { GearInfoClothes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoClothes.json") })(),
        (async () => { GearInfoShoes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoShoes.json") })(),
        (async () => { HairInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/HairInfo.json") })(),
        (async () => { EyebrowInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/EyebrowInfo.json") })(),
        (async () => { BottomInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/BottomInfo.json") })()//,
        //(async () => { NameplateInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/NamePlateBgInfo.json") })(),
    ]);
    await load_options();
});

$(document).ready(function() {
    var chosenOption = Cookies.get('accept_warning');
    if (chosenOption === 'true') return;
    $('#warningModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#acceptModal').click(function() {
        $('#warningModal').modal('hide');
        Cookies.set('accept_warning', 'true');
    });
  });
  
