var WeaponInfoMain;
var GearInfoHead;
var GearInfoClothes;
var GearInfoShoes;
var BottomInfo;
var HairInfo;
var EyebrowInfo;
var VersusSceneInfo;
var langEUen;

var playerInfos = [];
var defaultPlayerInfo = {"sett_rsdb": {}, "sett_clickable": {}, "name": "", "anim": "Tstance"};
var curPlayer = -1;
var playerNum = 1;
const maxPlayerNum = 10;

function getRsdbInfoById(rsdbData, id){
  id = Number(id);
  for(var i = 0; i < rsdbData.length; i++){
    if(rsdbData[i]["Id"] == id) return rsdbData[i];
  }
}

function click_player_sett(target)
{
  var className = target.getAttribute("class");
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("selected", "false");
  }
  target.setAttribute("selected", "true");
  
  if(curPlayer != -1) playerInfos[curPlayer]["sett_clickable"][className] = target;
  else defaultPlayerInfo["sett_clickable"][className] = target;

  if(className == "gallery_image_playertype") onChangePlayerType(target.getAttribute("rsdb_id"));
};

function click_player_sett_event(event)
{
  click_player_sett(event.target);
};

function loadAnims(url){
  var player_anim_list = document.getElementById("player_anim_list");
  jQuery.get(url, data => {
        var lines = data.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var option = document.createElement("option");
          option.text = lines[i];
          player_anim_list.add(option);
        }
      },
  );
};

function onRsdbEntrySelect(target){
  document.getElementById(target.getAttribute('resultImg')).setAttribute('src', target.src);
  var info = document.getElementById(target.getAttribute('resultInfo'));
  info.setAttribute("rsdb_id", target.getAttribute("rsdb_id"));
  info.textContent = target.alt;
  if(info.getAttribute("player_specific") == "true"){
    if(curPlayer != -1) playerInfos[curPlayer]["sett_rsdb"][info.id] = target;
    else defaultPlayerInfo["sett_rsdb"][info.id] = target;
  }
}

function onPlayerChange(id){
  if(id >= maxPlayerNum) console.error("wtf");
  curPlayer = id;
  document.getElementById('player_id_holder').value = curPlayer + 1;
  for (const [key, value] of Object.entries(playerInfos[curPlayer]["sett_rsdb"])) onRsdbEntrySelect(value);
  for (const [key, value] of Object.entries(playerInfos[curPlayer]["sett_clickable"])) click_player_sett(value);
  document.getElementById('player_name_holder').value = playerInfos[curPlayer]["name"];
  document.getElementById("player_anim_list").value = playerInfos[curPlayer]["anim"];
}

function onPlayersCreate(){
  for(var i = 0; i < maxPlayerNum; i++){
    playerInfos.push({"sett_rsdb": {}, "sett_clickable": {}, "name": defaultPlayerInfo["name"], "anim": defaultPlayerInfo["anim"]});
    for (const [key, value] of Object.entries(defaultPlayerInfo["sett_rsdb"])) playerInfos[i]["sett_rsdb"][key] = value.cloneNode(true);
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
    "gallery_image_map",
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
    "gallery_image_weapon",
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

function loadGear(modalName, GearInfo, langFileName, resultImg, resultInfo){
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
    "gallery_image_gear",
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
  loadClickableIdOptions("image_gallery_skin", "image_gallery_skin", "gallery_image_skin", 9, 9, 
  idx => {
    return "./assets/img/player/skin_color/" + String(idx) + ".png";
  }, 
  idx => {
    return idx;
  });
};

function loadEyeColors(){
  loadClickableIdOptions("image_gallery_eyecolor", "image_gallery_eyecolor", "gallery_image_eyecolor", 21, 7, 
  idx => {
    return "./assets/img/player/eye_color/" + String(idx) + ".png";
  }, 
  idx => {
    return idx;
  });
};

function loadHairs(){
  loadClickableIdOptions("image_gallery_hair", "image_gallery_hair", "gallery_image_hair", HairInfo.length, 8, 
  idx => {
    return "./assets/img/player/hair/" + HairInfo[idx]["__RowId"] + ".png";
  }, 
  idx => {
    return HairInfo[idx]["Id"];
  });
  hairOpts = document.getElementsByClassName("gallery_image_hair");
  for(var i = 0; i < hairOpts.length; i++){
    if(hairOpts[i].getAttribute("rsdb_id") == "500"){
      hairOpts[i].src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500) + "_F.png";
      hairOpts[i].setAttribute("id", "hair_msn310");
    }
  }
};

function loadEyebrows(){
  loadClickableIdOptions("image_gallery_eyebrow", "image_gallery_eyebrow", "gallery_image_eyebrow", EyebrowInfo.length, 4, 
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
    if(BottomInfo[i]["Order"] != -1) continue;
    validInfos.push(BottomInfo[i]);
  }
  loadClickableIdOptions("image_gallery_pants", "image_gallery_pants", "gallery_image_pants", validInfos.length, validInfos.length, 
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

  eyebrowOpts = document.getElementsByClassName("gallery_image_eyebrow");
  for(var i = 0; i < eyebrowOpts.length; i++) eyebrowOpts[i].src = "./assets/img/player/eyebrow/" + getRsdbInfoById(EyebrowInfo, eyebrowOpts[i].getAttribute("rsdb_id"))["__RowId"] + suffix;

  document.getElementById("hair_msn310").src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500)["__RowId"] + suffix;;
};

function load_options(){
  loadMaps();
  loadWeapons();
  loadGear("modalHed", GearInfoHead, "CommonMsg/Gear/GearName_Head", "chosenHedImg", "chosenHedInfo");
  loadGear("modalClt", GearInfoClothes, "CommonMsg/Gear/GearName_Clothes", "chosenCltImg", "chosenCltInfo");
  loadGear("modalShs", GearInfoShoes, "CommonMsg/Gear/GearName_Shoes", "chosenShsImg", "chosenShsInfo");
  loadAnims("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/animations.txt");
  loadSkinTones();
  loadEyeColors();
  loadHairs();
  loadEyebrows();
  loadPants();

  $('.gallery_image_playertype').click(click_player_sett_event);
  $('.gallery_image_skin').click(click_player_sett_event);
  $('.gallery_image_eyecolor').click(click_player_sett_event);
  $('.gallery_image_hair').click(click_player_sett_event);
  $('.gallery_image_eyebrow').click(click_player_sett_event);
  $('.gallery_image_pants').click(click_player_sett_event);
  $('.player_name_holder').on("propertychange change click keyup input paste", function(event){
    var name_holder = event.target;
    if(name_holder.value != playerInfos[curPlayer]["name"]) playerInfos[curPlayer]["name"] = name_holder.value;
  });
  $('.player_anim_list').on("propertychange change click keyup input paste", function(event){
    var anim_holder = event.target;
    if(anim_holder.value != playerInfos[curPlayer]["anim"]) playerInfos[curPlayer]["anim"] = anim_holder.value;
  });
  click_player_sett(document.getElementsByClassName('gallery_image_playertype')[0]);
  click_player_sett(document.getElementsByClassName('gallery_image_skin')[0]);
  click_player_sett(document.getElementsByClassName('gallery_image_eyecolor')[0]);
  click_player_sett(document.getElementsByClassName('gallery_image_hair')[0]);
  click_player_sett(document.getElementsByClassName('gallery_image_eyebrow')[0]);
  click_player_sett(document.getElementsByClassName('gallery_image_pants')[0]);

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

$(document).ready(function () {
  jQuery.getJSON("https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/data/language/EUen.json", data => {
  langEUen = data;
  jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/WeaponInfoMain.json", data => {
    WeaponInfoMain = data;
    jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/VersusSceneInfo.json", data => {
      VersusSceneInfo = data;
        jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoHead.json", data => {
          GearInfoHead = data;
          jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoClothes.json", data => {
            GearInfoClothes = data;
            jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/GearInfoShoes.json", data => {
              GearInfoShoes = data;
              jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/HairInfo.json", data => {
                HairInfo = data;
                jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/EyebrowInfo.json", data => {
                  EyebrowInfo = data;
                  jQuery.getJSON("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/RSDB/BottomInfo.json", data => {
                    BottomInfo = data;
                    load_options();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
