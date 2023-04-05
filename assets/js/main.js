var WeaponInfoMain;
var GearInfoHead;
var GearInfoClothes;
var GearInfoShoes;
var BottomInfo;
var HairInfo;
var EyebrowInfo;
var VersusSceneInfo;
var langEUen;

var sessionInfo = {};
var playerInfos = [];
var defaultPlayerInfo = {"sett_rsdb": {}, "sett_clickable": {}, "name": "", "anim": "Tstance"};
var curPlayer = -1;
var playerNum = 1;
const maxPlayerNum = 10;

async function fetchJson(url) {
  const response = await fetch(url);
  return await response.json();
}

function getRsdbInfoById(rsdbData, id){
  id = Number(id);
  for(var i = 0; i < rsdbData.length; i++){
    if(rsdbData[i]["Id"] == id) return rsdbData[i];
  }
}

function getElementByRsdbId(className, rsdbId){
  rsdbId = String(rsdbId);
  var elements = document.getElementsByClassName(className);
  for(var i = 0; i < elements.length; i++){
    if(elements[i].getAttribute("rsdb_id") == rsdbId) return elements[i];
  }
}

function downloadFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function downloadConfig(){
  var zip = new JSZip();

  var sessionConfig = {"map_name": getRsdbInfoById(VersusSceneInfo, sessionInfo["vs_map"])["__RowId"], "env_time": Number(document.getElementById("chosenEnvTime").checked) * 2};
  zip.file('PhotoForCalico/SessionConfig.json', JSON.stringify(sessionConfig, null, 2));

  var playerConfig = {};
  for(var i = 0; i < playerNum; i++){
    var info = playerInfos[i];
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
      "color_name": "NULL"
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
  var className = target.getAttribute("class");
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
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

async function loadAnims(url) {
  var player_anim_list = document.getElementById("player_anim_list");
  let response = await fetch(url);
  let data = await response.text();

  var lines = data.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var option = document.createElement("option");
    option.text = lines[i];
    player_anim_list.add(option);
  }
};

const select = document.getElementById('player_anim_list');
const anim_icon = document.getElementById('player_anim_icon');
select.addEventListener('change', () => {
  const player_anim = select.value;
  anim_icon.src = "./assets/img/player/animations/" + player_anim + '.png';
});



function onRsdbEntrySelect(target){
  var className = target.getAttribute("class");
  
  document.getElementById(target.getAttribute('resultImg')).setAttribute('src', target.src);
  var info = document.getElementById(target.getAttribute('resultInfo'));
  info.setAttribute("rsdb_id", target.getAttribute("rsdb_id"));
  info.textContent = target.alt;

  var rsdb_id = target.getAttribute("rsdb_id");
  if(info.getAttribute("player_specific") == "true"){
    if(curPlayer != -1) playerInfos[curPlayer]["sett_rsdb"][className] = rsdb_id;
    else defaultPlayerInfo["sett_rsdb"][className] = rsdb_id;
  } else sessionInfo[className] = rsdb_id;
}

function onPlayerChange(id){
  if(id >= maxPlayerNum) console.error("wtf");
  curPlayer = id;
  document.getElementById('player_id_holder').value = curPlayer + 1;
  for (const [key, value] of Object.entries(playerInfos[curPlayer]["sett_rsdb"])) onRsdbEntrySelect(getElementByRsdbId(key, value));
  for (const [key, value] of Object.entries(playerInfos[curPlayer]["sett_clickable"])) click_player_sett(getElementByRsdbId(key, value));
  document.getElementById('player_name_holder').value = playerInfos[curPlayer]["name"];
  document.getElementById("player_anim_list").value = playerInfos[curPlayer]["anim"];
}

function onPlayersCreate(){
  for(var i = 0; i < maxPlayerNum; i++){
    playerInfos.push({"sett_rsdb": {}, "sett_clickable": {}, "name": defaultPlayerInfo["name"], "anim": defaultPlayerInfo["anim"]});
    for (const [key, value] of Object.entries(defaultPlayerInfo["sett_rsdb"])) playerInfos[i]["sett_rsdb"][key] = value;
    for (const [key, value] of Object.entries(defaultPlayerInfo["sett_clickable"])) playerInfos[i]["sett_clickable"][key] = value;
  }
}

function buildRsdbSelector(modalName, rsdbInfos, entryPerLine, getCodeNameFunc, getNameFunc, classNameGallery, classNameImg, getImgUrlFunc, defaultImgUrl, width, height, resultImg, resultInfo){
  var modalBody = document.getElementById(modalName).getElementsByClassName("modal-body")[0];

  for(var i = 0; i < rsdbInfos.length / entryPerLine; i++){

    var gallery = document.createElement("div");
    gallery.setAttribute("class", classNameGallery);

    for(var idx = i * entryPerLine; idx < Math.min((i + 1) * entryPerLine, rsdbInfos.length); idx++){
      var entry = new Image();

      var codeName = getCodeNameFunc(rsdbInfos[idx]);
      entry.alt = getNameFunc(codeName);
      entry.src = getImgUrlFunc(codeName);

      entry.setAttribute("rsdb_id", rsdbInfos[idx]["Id"]);
      entry.setAttribute("default_url", defaultImgUrl);

      entry.onerror = function(event){
        var target = event.target || event.srcElement;
        target.src = target.getAttribute("default_url"); // No Icon
      };
      entry.addEventListener('click', (event) => {
        var target = event.target;
        onRsdbEntrySelect(target);
      });
      entry.setAttribute("width", width);
      entry.setAttribute("height", height);
      entry.setAttribute("resultImg", resultImg);
      entry.setAttribute("resultInfo", resultInfo);
      entry.setAttribute("class", classNameImg);
      entry.setAttribute("data-dismiss", "modal");
      gallery.appendChild(entry);

      if(idx == 0) onRsdbEntrySelect(entry);
    }
    modalBody.appendChild(gallery);
  }
}

function loadMaps(){
  var mapNames = langEUen["CommonMsg/VS/VSStageName"];
  buildRsdbSelector(
    "modalMap", 
    VersusSceneInfo, 
    4, 
    info => {
      var mapName = info["__RowId"].slice(4);
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
      return "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/stage/Vss_" + codeName + ".png";
    },
    'https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/stage/Dummy.png',
    160,
    90,
    "chosenMapImg",
    "chosenMapInfo"
  )
};

function loadWeapons(){
  var validInfos = [];
  for(var i = 0; i < WeaponInfoMain.length; i++){
    if(WeaponInfoMain[i]["Type"] != "Versus") continue; // Only add obtainable weapons
    validInfos.push(WeaponInfoMain[i]);
  }
  var weaponNames = langEUen["CommonMsg/Weapon/WeaponName_Main"];
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
      return "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/weapon/Wst_" + codeName + ".png"
    },
    'https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/weapon/Dummy.png',
    90,
    90,
    "chosenWeaponImg",
    "chosenWeaponInfo"
  )
};

function loadGear(modalName, GearInfo, langFileName, className, resultImg, resultInfo){
  var gearNames = langEUen[langFileName];
  buildRsdbSelector(
    modalName, 
    GearInfo, 
    6, 
    info => {
      return info["__RowId"];
    },
    codeName => {
      var name = codeName.slice(4);
      if(name in gearNames) return gearNames[name];
      return name;
    },
    "image_gallery_gear",
    className,
    codeName => {
      return "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/gear/" + codeName + ".png"
    },
    'https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/gear/Dummy.png',
    90,
    90,
    resultImg,
    resultInfo
  )
};

function loadClickableIdOptions(galleryId, galleryClassName, imgClassName, totalNum, entryPerLine, getImgUrlFunc, getRsdbIdFunc){
  gallery_root = document.getElementById(galleryId);

  for(var i = 0; i < totalNum / entryPerLine; i++){
    gallery = document.createElement("div");
    gallery.setAttribute("class", galleryClassName)
    for(var idx = i * entryPerLine; idx < Math.min((i + 1) * entryPerLine, totalNum); idx++){
      option = new Image();
      option.src = getImgUrlFunc(idx);
      option.setAttribute("rsdb_id", getRsdbIdFunc(idx));
      option.setAttribute("class", imgClassName);
      gallery.appendChild(option);
    }

    gallery_root.appendChild(gallery);
  }
};

function loadSkinTones(){
  loadClickableIdOptions("image_gallery_skin", "image_gallery_skin", "player_skintone", 9, 9, 
  idx => {
    return "./assets/img/player/skin_color/" + String(idx) + ".png";
  }, 
  idx => {
    return idx;
  });
};

function loadEyeColors(){
  loadClickableIdOptions("image_gallery_eyecolor", "image_gallery_eyecolor", "player_eyecolor", 21, 7, 
  idx => {
    return "./assets/img/player/eye_color/" + String(idx) + ".png";
  }, 
  idx => {
    return idx;
  });
};

function loadHairs(){
  loadClickableIdOptions("image_gallery_hair", "image_gallery_hair", "player_hair", HairInfo.length, 8, 
  idx => {
    return "./assets/img/player/hair/" + HairInfo[idx]["__RowId"] + ".png";
  }, 
  idx => {
    return HairInfo[idx]["Id"];
  });
  hairOpts = document.getElementsByClassName("player_hair");
  for(var i = 0; i < hairOpts.length; i++){
    if(hairOpts[i].getAttribute("rsdb_id") == "500"){
      hairOpts[i].src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500) + "_F.png";
      hairOpts[i].setAttribute("id", "hair_msn310");
    }
  }
};

function loadEyebrows(){
  loadClickableIdOptions("image_gallery_eyebrow", "image_gallery_eyebrow", "player_eyebrow", EyebrowInfo.length, 4, 
  idx => {
    return "./assets/img/player/eyebrow/" + EyebrowInfo[idx]["__RowId"] + "_F.png";
  },
  idx => {
    return EyebrowInfo[idx]["Id"];
  });
};

function loadPants(){
  var validInfos = [];
  for(var i = 0; i < BottomInfo.length; i++){
    if(BottomInfo[i]["Order"] == -1) continue;
    validInfos.push(BottomInfo[i]);
  }
  loadClickableIdOptions("image_gallery_pants", "image_gallery_pants", "player_bottom", validInfos.length, validInfos.length, 
  idx => {
    return "./assets/img/player/pants/" + validInfos[idx]["__RowId"] + ".png";
  },
  idx => {
    return validInfos[idx]["Id"];
  });
};

function onChangePlayerType(playerType){
  playerType = Number(playerType);

  var suffix = "_F.png";
  if(playerType & 1) suffix = "_M.png";

  eyebrowOpts = document.getElementsByClassName("player_eyebrow");
  for(var i = 0; i < eyebrowOpts.length; i++) eyebrowOpts[i].src = "./assets/img/player/eyebrow/" + getRsdbInfoById(EyebrowInfo, eyebrowOpts[i].getAttribute("rsdb_id"))["__RowId"] + suffix;

  document.getElementById("hair_msn310").src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500)["__RowId"] + suffix;;
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
    var name_holder = event.target;
    if(name_holder.value != playerInfos[curPlayer]["name"]) playerInfos[curPlayer]["name"] = name_holder.value;
  });
  $('.player_anim_list').on("propertychange change click keyup input paste", function(event){
    var anim_holder = event.target;
    if(anim_holder.value != playerInfos[curPlayer]["anim"]) playerInfos[curPlayer]["anim"] = anim_holder.value;
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
    var num_holder = event.target;
    if(num_holder.value != playerNum){
      playerNum = num_holder.value;
      document.getElementById('player_id_holder').setAttribute("max", playerNum);
      if(curPlayer >= playerNum) onPlayerChange(playerNum - 1);
    };
  });
  $('.player_id_holder').on("propertychange change click keyup input paste", function(event){
    var id_holder = event.target;
    if(id_holder.value - 1 != curPlayer) onPlayerChange(id_holder.value - 1);
  });
};

$(document).ready(async () => {
  await Promise.all([
    (async () => { langEUen = await fetchJson("https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/data/language/EUen.json") })(),
    (async () => { WeaponInfoMain = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/WeaponInfoMain.json") })(),
    (async () => { VersusSceneInfo =  await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/VersusSceneInfo.json") })(),
    (async () => { GearInfoHead = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoHead.json") })(),
    (async () => { GearInfoClothes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoClothes.json") })(),
    (async () => { GearInfoShoes = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoShoes.json") })(),
    (async () => { HairInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/HairInfo.json") })(),
    (async () => { EyebrowInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/EyebrowInfo.json") })(),
    (async () => { BottomInfo = await fetchJson("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/BottomInfo.json") })(),
  ]);
  await load_options();
});
