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


var SaveEdits;

function resetEdits(){
    SaveEdits = {
        "default_edits": {}, 
        "dict_edits": 
        {
            "weapon": {
                "edit": {},
                "remove": new Set()
            }, 
            "gear_head": {
                "edit": {},
                "remove": new Set()
            },
            "gear_clothes": {
                "edit": {},
                "remove": new Set()
            },
            "gear_shoes": {
                "edit": {},
                "remove": new Set()
            }
        }
    };
};
resetEdits();

function setNotHaveObtainableItem(element){
    element.style.backgroundColor = "gray";
    element.setAttribute("obtainable_state", "no");
}

function setHaveObtainableItem(element){
    element.style.backgroundColor = "rgb(0, 125, 0)";
    element.setAttribute("obtainable_state", "yes");
}

function setEquippedObtainableItem(element){
    var elements = document.getElementsByClassName(element.getAttribute("class"));
    for(var i = 0; i < elements.length; i++){
        if(elements[i].getAttribute("obtainable_state") == "equipped") setHaveObtainableItem(elements[i]);
    }
    element.style.backgroundColor = "rgb(0, 125, 125)";
    element.setAttribute("obtainable_state", "equipped");
}

function resetObtainableItems(imgClassName){
    var elements = document.getElementsByClassName(imgClassName);
    for(var i = 0; i < elements.length; i++) setNotHaveObtainableItem(elements[i]);
}

function setHaveObtainableItemById(className, rsdb_id){
    var element = getElementByRsdbId(className, rsdb_id);
    if(element == null) return;
    setHaveObtainableItem(element);
}

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
    resetEdits();

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

    resetObtainableItems("player_weapon");
    resetObtainableItems("player_headgear");
    resetObtainableItems("player_clothes");
    resetObtainableItems("player_shoes");

    for(var rsdb_id in SaveJson["server"]["HaveWeaponMap"]) setHaveObtainableItemById("player_weapon", rsdb_id);

    var element = getElementByRsdbId("player_weapon", playerInfo["WeaponId"]);
    if(element != null){
        setEquippedObtainableItem(element);
        element.click();
    }

    for(var rsdb_id in SaveJson["server"]["HaveGearHeadMap"]) setHaveObtainableItemById("player_headgear", rsdb_id);
    
    element = getElementByRsdbId("player_headgear", playerInfo["GearHeadId"]);
    if(element != null){
        setEquippedObtainableItem(element);
        element.click();
    }

    for(var rsdb_id in SaveJson["server"]["HaveGearClothesMap"]) setHaveObtainableItemById("player_clothes", rsdb_id);

    element = getElementByRsdbId("player_clothes", playerInfo["GearClothesId"]);
    if(element != null){
        setEquippedObtainableItem(element);
        element.click();
    }

    for(var rsdb_id in SaveJson["server"]["HaveGearShoesMap"]) setHaveObtainableItemById("player_shoes", rsdb_id);

    element = getElementByRsdbId("player_shoes", playerInfo["GearShoesId"]);
    if(element != null){
        setEquippedObtainableItem(element);
        element.click();
    }
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

function loadWeapons(){
    var validInfos = [];
    for(var i = 0; i < WeaponInfoMain.length; i++){
        if(WeaponInfoMain[i]["Type"] != "Versus") continue; // Only add obtainable weapons
        validInfos.push(WeaponInfoMain[i]);
    }
    loadClickableIdOptions(
        "image_gallery_weapon", "image_gallery_weapon", "player_weapon", validInfos.length, 6, 
        idx => {
            return "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/weapon/Wst_" + validInfos[idx]["__RowId"] + ".png"
        }, 
        idx => {
            return validInfos[idx]["Id"];
        },
        90,
        90
    );
    resetObtainableItems("player_weapon");
};

function loadGear(galleryId, galleryClassName, imgClassName, GearInfo){
    var validInfos = [];
    for(var i = 0; i < GearInfo.length; i++){
        if(GearInfo[i]["HowToGet"] == "Impossible") continue; // Only add obtainable gear
        validInfos.push(GearInfo[i]);
    }
    loadClickableIdOptions(
        galleryId, galleryClassName, imgClassName, validInfos.length, 6, 
        idx => {
            return "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/gear/" + validInfos[idx]["__RowId"] + ".png"
        }, 
        idx => {
            return validInfos[idx]["Id"];
        },
        90,
        90
    );
    resetObtainableItems(imgClassName);
};

function loadAbilities(){
    var ability_ids = Object.keys(GEAR_ABILITY_ID_MAP);
    loadClickableIdOptions(
        "image_gallery_ability", "image_gallery_ability", "gear_ability", ability_ids.length, ability_ids.length, 
        idx => {
            return "./assets/img/skill/" + GEAR_ABILITY_ID_MAP[ability_ids[idx]] + ".png"
        }, 
        idx => {
            return ability_ids[idx];
        },
        90,
        90
    );
}

function ensureObtainableInDictEdits(element, editType, mapName){
    var rsdb_id = element.getAttribute("rsdb_id");
    var edit_info = SaveEdits["dict_edits"][editType]["edit"];
    if(!(rsdb_id in edit_info)) 
        edit_info[rsdb_id] = JSON.parse(JSON.stringify(SaveJson["server"][mapName][rsdb_id]));
};

function getObtainableJson(rsdb_id, editType, mapName){
    if(rsdb_id in SaveEdits["dict_edits"][editType]["edit"]) return SaveEdits["dict_edits"][editType]["edit"][rsdb_id];
    if(rsdb_id in SaveJson["server"][mapName]) return SaveJson["server"][mapName][rsdb_id];
    return null;
}

function obtainGear(element, gear_name){
    var rsdb_id = element.getAttribute("rsdb_id");
    SaveEdits["dict_edits"][gear_name]["remove"].delete(rsdb_id);
    SaveEdits["dict_edits"][gear_name]["edit"][element.getAttribute("rsdb_id")] = {
        "Exp": 0,
        "TotalExp": 0,
        "Rarity": 0,
        "MainSkill": 0,
        "ExSkillArray": [
            -1
        ],
        "LastPlayDateTimeUtc": 0,
        "RandomContext": 0
    };
    setHaveObtainableItem(element);
};

function obtainWeapon(element){
    var rsdb_id = element.getAttribute("rsdb_id");
    SaveEdits["dict_edits"]["weapon"]["remove"].delete(rsdb_id);
    SaveEdits["dict_edits"]["weapon"]["edit"][element.getAttribute("rsdb_id")] = {
        "TotalPaintTubo": 0,
        "LastPlayDateTimeUtc": 0,
        "RegularWinPoint": 0,
        "RegularWinHighGrade": 0,
        "Exp": 0,
        "Level": 0,
        "RewardAcceptLevel": 0,
        "WinCount": 0
    };
    setHaveObtainableItem(element);
};

function removeObtainable(className, editType, updateObtainableF){
    var element = getSelectedElement(className);
    if(element.getAttribute("obtainable_state") == "equipped") return;
    var rsdb_id = element.getAttribute("rsdb_id");
    if(rsdb_id in SaveEdits["dict_edits"][editType]["edit"]) delete SaveEdits["dict_edits"][editType]["edit"][rsdb_id];
    SaveEdits["dict_edits"][editType]["remove"].add(rsdb_id);
    setNotHaveObtainableItem(element);
    updateObtainableF(element);
}

function equipObtainable(className, editType, updateObtainableF){
    var element = getSelectedElement(className);
    var rsdb_id = element.getAttribute("rsdb_id");
    SaveEdits["default_edits"][editType] = rsdb_id;
    setEquippedObtainableItem(element);
    updateObtainableF(element);
}

function bulkGetObtainable(className, obtainFunction, obtainFunctionArg){
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
        if(elements[i].getAttribute("obtainable_state") == "no") obtainFunction(elements[i], obtainFunctionArg);
    }
}

function updateWeaponObtainable(element){
    obtainable_state = element.getAttribute("obtainable_state");
    document.getElementById("get_weapon_button").disabled = !(obtainable_state == "no");
    document.getElementById("remove_weapon_button").disabled = (obtainable_state == "no");
    document.getElementById("equip_weapon_button").disabled = (obtainable_state != "yes");
};

function updateHeadgearObtainable(element){
    obtainable_state = element.getAttribute("obtainable_state");
    document.getElementById("get_headgear_button").disabled = !(obtainable_state == "no");
    document.getElementById("remove_headgear_button").disabled = (obtainable_state == "no");
    document.getElementById("equip_headgear_button").disabled = (obtainable_state != "yes");
};

function updateClothesObtainable(element){
    obtainable_state = element.getAttribute("obtainable_state");
    document.getElementById("get_clothes_button").disabled = !(obtainable_state == "no");
    document.getElementById("remove_clothes_button").disabled = (obtainable_state == "no");
    document.getElementById("equip_clothes_button").disabled = (obtainable_state != "yes");
};

function updateShoesObtainable(element){
    obtainable_state = element.getAttribute("obtainable_state");
    document.getElementById("get_shoes_button").disabled = !(obtainable_state == "no");
    document.getElementById("remove_shoes_button").disabled = (obtainable_state == "no");
    document.getElementById("equip_shoes_button").disabled = (obtainable_state != "yes");
};

function clickObtainable(element, chosenImgId, chosenInfoId, RsdbInfo, langFileName, updateObtainableF, parseCodeNameF = null){
    click_clickable_sett(element);

    document.getElementById(chosenImgId).src = element.src;

    var name = getRsdbInfoById(RsdbInfo, element.getAttribute("rsdb_id"))["__RowId"];
    if(parseCodeNameF != null) name = parseCodeNameF(name);
    if(name in langEUen[langFileName]) name = langEUen[langFileName][name];

    document.getElementById(chosenInfoId).textContent = name;

    updateObtainableF(element);
}

function openAbilityModal(event){
    var target_id = event.target.getAttribute("id");

    var element_type = null;
    if(target_id.startsWith('hed')) element_type ="player_headgear";
    else if(target_id.startsWith('clt')) element_type ="player_clothes";
    else if(target_id.startsWith('shs')) element_type ="player_shoes";

    if(element_type == null) return;

    var element = getSelectedElement(element_type);
    if(element.getAttribute("obtainable_state") == "no") return;
    
    $('#modalGearAbility').modal('show');
    document.getElementById('modalGearAbility').target_id = event.target.getAttribute("id");
}

function selectAbilityModal(event){
    var target = event.target;
    var new_rsdb_id = Number(target.getAttribute("rsdb_id"));

    $('#modalGearAbility').modal('hide');
    var target_id = document.getElementById('modalGearAbility').target_id;
    document.getElementById(target_id).src = "./assets/img/skill/" + GEAR_ABILITY_ID_MAP[new_rsdb_id] + '.png';

    var edit_type = null;
    var map_type = null;
    var element_type = null;
    if(target_id.startsWith('hed')){
        edit_type = "gear_head";
        map_type = "HaveGearHeadMap";
        element_type ="player_headgear";
    } else if(target_id.startsWith('clt')){
        edit_type = "gear_clothes";
        map_type = "HaveGearClothesMap";
        element_type ="player_clothes";
    }
    else if(target_id.startsWith('shs')){
        edit_type = "gear_shoes";
        map_type = "HaveGearShoesMap";
        element_type ="player_shoes";
    }

    if(edit_type == null || map_type == null || element_type == null) return;

    var element = getSelectedElement(element_type);
    var rsdb_id = element.getAttribute("rsdb_id");

    ensureObtainableInDictEdits(element, edit_type, map_type);
    var editInfo = SaveEdits["dict_edits"][edit_type]["edit"][rsdb_id];

    if(target_id.slice(4).startsWith("ability_main")){
        editInfo["MainSkill"] = new_rsdb_id;
        return
    }
    var exSkillId = Number(target_id.slice(target_id.length - 1, target_id.length));
    if(exSkillId < 0 || exSkillId >= 3 || exSkillId == NaN) return;

    for(var i = editInfo["ExSkillArray"].length; i < exSkillId; i++) editInfo["ExSkillArray"][i] = -1;
    editInfo["ExSkillArray"][exSkillId] = new_rsdb_id;
}

function initGearAbilityIcons(curInfo, classAbilityMain, classAbilitySub){
    var ability_id = 0;
    if(curInfo != null) ability_id = curInfo["MainSkill"];

    var sub_abilities = [];
    if(curInfo != null) sub_abilities = curInfo["ExSkillArray"];
    
    var ability_main = document.getElementById(classAbilityMain);
    ability_main.src = "./assets/img/skill/" + GEAR_ABILITY_ID_MAP[ability_id] + '.png';
    ability_main.onclick = openAbilityModal;

    var head_abilities_sub = document.getElementsByClassName(classAbilitySub);
    for(var i = 0; i < sub_abilities.length; i++) head_abilities_sub[i].src = "./assets/img/skill/" + GEAR_ABILITY_ID_MAP[sub_abilities[i]] + '.png';
    for(var i = sub_abilities.length; i < 3; i++) head_abilities_sub[i].src = "./assets/img/skill/None.png";
    for(var i = 0; i < 3; i++) head_abilities_sub[i].onclick = openAbilityModal;
}

async function load_options(){
    loadSkinTones();
    loadEyeColors();
    loadHairs();
    loadEyebrows();
    loadPants();
    loadWeapons();
    loadGear("image_gallery_gear_head", "image_gallery_gear_head", "player_headgear", GearInfoHead);
    loadGear("image_gallery_gear_clothes", "image_gallery_gear_clothes", "player_clothes", GearInfoClothes);
    loadGear("image_gallery_gear_shoes", "image_gallery_gear_shoes", "player_shoes", GearInfoShoes);
    loadAbilities();

	$('.player_name_holder').on("propertychange change click keyup input paste", function(event){
        var name_holder = event.target;
        if(name_holder.value.length > 16) name_holder.value = name_holder.value.slice(0, 16);
        SaveEdits["default_edits"]["player_name"] = name_holder.value;
    });
	$('.player_identifier_holder').on("propertychange change click keyup input paste", function(event){
        var id_holder = event.target;
        if(id_holder.value.length > 4) id_holder.value = id_holder.value.slice(0, 4);
        SaveEdits["default_edits"]["player_identifier"] = id_holder.value;
    });
	$('.player_rank_holder').on("propertychange change click keyup input paste", function(event){
        var rank_holder = event.target;
        if(rank_holder.value > 99) rank_holder.value = 99;
        if(rank_holder.value < 1) rank_holder.value = 1;
        SaveEdits["default_edits"]["player_rank"] = rank_holder.value - 1;
    });
	$('.player_rank_exp_holder').on("propertychange change click keyup input paste", function(event){
        SaveEdits["default_edits"]["player_rank_exp"] = event.target.value;
    });
    $('.money_holder').on("propertychange change click keyup input paste", function(event){
        var money_holder = event.target;
        if(money_holder.value > 9999999) money_holder.value = 9999999;
        if(money_holder.value < 0) money_holder.value = 0;
        SaveEdits["default_edits"]["money"] = money_holder.value;
    });
    $('.snail_holder').on("propertychange change click keyup input paste", function(event){
        var snail_holder = event.target;
        if(snail_holder.value > 999) snail_holder.value = 999;
        if(snail_holder.value < 0) snail_holder.value = 0;
        SaveEdits["default_edits"]["snails"] = snail_holder.value;
    });
    $('.player_playertype').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_playertype"] = event.target.getAttribute("rsdb_id");
        onChangePlayerType(event.target.getAttribute("rsdb_id"));
    });
    $('.player_skintone').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_skintone"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_eyecolor').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_eyecolor"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_hair').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_hair"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_eyebrow').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_eyebrow"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_bottom').click( function(event){
        click_clickable_sett(event.target);
        SaveEdits["default_edits"]["player_bottom"] = event.target.getAttribute("rsdb_id");
    });
    $('.player_weapon').click( function(event){
        clickObtainable(event.target, "chosenWeaponImg", "chosenWeaponInfo", WeaponInfoMain, "CommonMsg/Weapon/WeaponName_Main", updateWeaponObtainable);
        var rsdb_id = event.target.getAttribute("rsdb_id");
        var curInfo = getObtainableJson(rsdb_id, "weapon", "HaveWeaponMap");

        var freshness = document.getElementById("weapon_freshness_holder");

        if(curInfo != null) freshness.value = curInfo["Level"];
        else freshness.value = 0;
    });
    $('.get_weapon_button').click( function(event){
        var element = getSelectedElement("player_weapon");
        obtainWeapon(element);
        updateWeaponObtainable(element);
    });
    $('.bulk_get_weapon_button').click( function(event){
        bulkGetObtainable("player_weapon", obtainWeapon);
    });
    $('.equip_weapon_button').click( function(event){
        equipObtainable("player_weapon", "player_weapon", updateWeaponObtainable);
    });
    $('.remove_weapon_button').click( function(event){
        removeObtainable("player_weapon", "weapon", updateWeaponObtainable);
    });
    $('.weapon_freshness_holder').on("propertychange change click keyup input paste", function(event){
        var freshness_holder = event.target;
        if(freshness_holder.value > 5) freshness_holder.value = 5;
        if(freshness_holder.value < 0) freshness_holder.value = 0;

        var element = getSelectedElement("player_weapon");
        if(element.getAttribute("obtainable_state") == "no") return;

        var rsdb_id = element.getAttribute("rsdb_id");

        ensureObtainableInDictEdits(element, "weapon", "HaveWeaponMap");
        SaveEdits["dict_edits"]["weapon"]["edit"][rsdb_id]["Level"] = freshness_holder.value;
    });
    $('.player_headgear').click( function(event){
        clickObtainable(event.target, "chosenHedImg", "chosenHedInfo", GearInfoHead, "CommonMsg/Gear/GearName_Head", updateHeadgearObtainable, 
        codeName => {
            return codeName.slice(4);
        });

        var rsdb_id = event.target.getAttribute("rsdb_id");
        var curInfo = getObtainableJson(rsdb_id, "gear_head", "HaveGearHeadMap");
        
        initGearAbilityIcons(curInfo, "hed_ability_main", "hed_ability_sub");

        var rarity = document.getElementById("hed_rarity_holder");

        if(curInfo != null) rarity.value = curInfo["Rarity"];
        else rarity.value = 0;
        
    });
    $('.player_clothes').click( function(event){
        clickObtainable(event.target, "chosenCltImg", "chosenCltInfo", GearInfoClothes, "CommonMsg/Gear/GearName_Clothes", updateClothesObtainable, 
        codeName => {
            return codeName.slice(4);
        });

        var rsdb_id = event.target.getAttribute("rsdb_id");
        var curInfo = getObtainableJson(rsdb_id, "gear_clothes", "HaveGearClothesMap");
        
        initGearAbilityIcons(curInfo, "clt_ability_main", "clt_ability_sub");

        var rarity = document.getElementById("clt_rarity_holder");

        if(curInfo != null) rarity.value = curInfo["Rarity"];
        else rarity.value = 0;
        
    });
    $('.player_shoes').click( function(event){
        clickObtainable(event.target, "chosenShsImg", "chosenShsInfo", GearInfoShoes, "CommonMsg/Gear/GearName_Shoes", updateShoesObtainable,
        codeName => {
            return codeName.slice(4);
        });

        var rsdb_id = event.target.getAttribute("rsdb_id");
        var curInfo = getObtainableJson(rsdb_id, "gear_shoes", "HaveGearShoesMap");
        
        initGearAbilityIcons(curInfo, "shs_ability_main", "shs_ability_sub");

        var rarity = document.getElementById("shs_rarity_holder");

        if(curInfo != null) rarity.value = curInfo["Rarity"];
        else rarity.value = 0;
        
    });
    $('.gear_rarity_holder').on("propertychange change click keyup input paste", function(event){
        var rarity_holder = event.target;
        if(rarity_holder.value > 5) rarity_holder.value = 5;
        if(rarity_holder.value < 0) rarity_holder.value = 0;

        var target_id = event.target.getAttribute("id");

        var edit_type = null;
        var map_type = null;
        var element_type = null;
        if(target_id.startsWith('hed')){
            edit_type = "gear_head";
            map_type = "HaveGearHeadMap";
            element_type ="player_headgear";
        } else if(target_id.startsWith('clt')){
            edit_type = "gear_clothes";
            map_type = "HaveGearClothesMap";
            element_type ="player_clothes";
        }
        else if(target_id.startsWith('shs')){
            edit_type = "gear_shoes";
            map_type = "HaveGearShoesMap";
            element_type ="player_shoes";
        }

        if(edit_type == null || map_type == null || element_type == null) return;

        var element = getSelectedElement(element_type);
        if(element.getAttribute("obtainable_state") == "no") return;

        var rsdb_id = element.getAttribute("rsdb_id");

        ensureObtainableInDictEdits(element, edit_type, map_type);
        SaveEdits["dict_edits"][edit_type]["edit"][rsdb_id]["Rarity"] = rarity_holder.value;
    });
    $('.gear_ability').click(selectAbilityModal);
    $('.get_headgear_button').click( function(event){
        var element = getSelectedElement("player_headgear");
        obtainGear(element, "gear_head");
        updateHeadgearObtainable(element);
    });
    $('.bulk_get_headgear_button').click( function(event){
        bulkGetObtainable("player_headgear", obtainGear, "gear_head");
    });
    $('.equip_headgear_button').click( function(event){
        equipObtainable("player_headgear", "player_headgear", updateHeadgearObtainable);
    });
    $('.remove_headgear_button').click( function(event){
        removeObtainable("player_headgear", "gear_head", updateHeadgearObtainable);
    });
    $('.get_clothes_button').click( function(event){
        var element = getSelectedElement("player_clothes");
        obtainGear(element, "gear_clothes");
        updateClothesObtainable(element);
    });
    $('.bulk_get_clothes_button').click( function(event){
        bulkGetObtainable("player_clothes", obtainGear, "gear_clothes");
    });
    $('.equip_clothes_button').click( function(event){
        equipObtainable("player_clothes", "player_clothes", updateClothesObtainable);
    });
    $('.remove_clothes_button').click( function(event){
        removeObtainable("player_clothes", "gear_clothes", updateClothesObtainable);
    });
    $('.get_shoes_button').click( function(event){
        var element = getSelectedElement("player_shoes");
        obtainGear(element, "gear_shoes");
        updateShoesObtainable(element);
    });
    $('.bulk_get_shoes_button').click( function(event){
        bulkGetObtainable("player_shoes", obtainGear, "gear_shoes");
    });
    $('.equip_shoes_button').click( function(event){
        equipObtainable("player_shoes", "player_shoes", updateShoesObtainable);
    });
    $('.remove_shoes_button').click( function(event){
        removeObtainable("player_shoes", "gear_shoes", updateShoesObtainable);
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
    var warningModal = new bootstrap.Modal(document.getElementById('warningModal'), {
        backdrop: 'static',
        keyboard: false
    })
    warningModal.show();
    $('#acceptModal').click(function() {
        warningModal.hide();
        Cookies.set('accept_warning', 'true');
    });
  });
  
