async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function getRsdbInfoById(rsdbData, id){
    id = Number(id);
    for(let i = 0; i < rsdbData.length; i++){
      if(rsdbData[i]["Id"] == id) return rsdbData[i];
    }
    return null;
}

function getRsdbInfoByName(rsdbData, name){
    for(let i = 0; i < rsdbData.length; i++){
      if(rsdbData[i]["__RowId"] == name) return rsdbData[i];
    }
    return null;
}
  
function getElementByRsdbId(className, rsdbId){
    rsdbId = String(rsdbId);
    let elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++){
      if(elements[i].getAttribute("rsdb_id") == rsdbId) return elements[i];
    }
    return null;
}

function getSelectedElement(className){
    let elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++){
      if(elements[i].getAttribute("selected") == "true") return elements[i];
    }
    return null;
}

function downloadFile(content, fileName, contentType) {
    let a = document.createElement("a");
    let file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function loadClickableIdOptions(galleryId, galleryClassName, imgClassName, totalNum, entryPerLine, getImgUrlFunc, getRsdbIdFunc, width = null, height = null){
  gallery_root = document.getElementById(galleryId);

  for(let i = 0; i < totalNum / entryPerLine; i++){
      gallery = document.createElement("div");
      gallery.setAttribute("class", galleryClassName)
      for(let idx = i * entryPerLine; idx < Math.min((i + 1) * entryPerLine, totalNum); idx++){
          option = new Image();
          option.src = getImgUrlFunc(idx);
          option.setAttribute("rsdb_id", getRsdbIdFunc(idx));
          option.setAttribute("class", imgClassName);
          if(width != null) option.setAttribute("width", width);
          if(height != null) option.setAttribute("height", height);
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
  let validInfos = [];
  for(let i = 0; i < HairInfo.length; i++){
      if(HairInfo[i]["__RowId"].search("Sdodr") != -1) continue; // Only add non sdodr hair
      validInfos.push(HairInfo[i]);
  }
  loadClickableIdOptions("image_gallery_hair", "image_gallery_hair", "player_hair", validInfos.length, 8, 
  idx => {
      return "./assets/img/player/hair/" + validInfos[idx]["__RowId"] + ".png";
  }, 
  idx => {
      return validInfos[idx]["Id"];
  });
  hairOpts = document.getElementsByClassName("player_hair");
  for(let i = 0; i < hairOpts.length; i++){
      if(hairOpts[i].getAttribute("rsdb_id") == "500"){
          hairOpts[i].src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500)["__RowId"] + "_F.png";
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
  let validInfos = [];
  for(let i = 0; i < BottomInfo.length; i++){
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

  let suffix = "_F.png";
  if(playerType & 1) suffix = "_M.png";

  eyebrowOpts = document.getElementsByClassName("player_eyebrow");
  for(let i = 0; i < eyebrowOpts.length; i++) eyebrowOpts[i].src = "./assets/img/player/eyebrow/" + getRsdbInfoById(EyebrowInfo, eyebrowOpts[i].getAttribute("rsdb_id"))["__RowId"] + suffix;

  document.getElementById("hair_msn310").src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500)["__RowId"] + suffix;
};

function RGBAToHex(r,g,b,a) {
  r = Math.round(r * 255).toString(16);
  g = Math.round(g * 255).toString(16);
  b = Math.round(b * 255).toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  if (a.length == 1) a = "0" + a;

  return "#" + r + g + b + a;
}

function ColorToHex(color) {
  return RGBAToHex(color.R, color.G, color.B, color.A);
}

function Clamp(val, min, max){
  if(val < min) val = min;
  if(val > max) val = max;
  return val;
};
function redirectHome(){
  window.location.replace("https://flexlion.github.io/");
}
function redirectAccount(){
  window.location.replace("https://flexlion.github.io/account");
}
function redirectLogin(){
  window.location.replace("https://discord.com/oauth2/authorize?client_id=1098338471829065939&redirect_uri=https%3A%2F%2Fflexlion.github.io%2Flogin&response_type=code&scope=identify");
}
function getFxToken(){
  return localStorage.getItem("fxtoken");
}
function setFxToken(token){
  localStorage.setItem("fxtoken", token)
}
function resetFxToken(){
  localStorage.removeItem("fxtoken");
}

GEAR_ABILITY_ID_MAP = {
  0: "MainInk_Save",
  1: "SubInk_Save",
  2: "InkRecovery_Up",
  3: "HumanMove_Up",
  4: "SquidMove_Up",
  5: "SpecialIncrease_Up",
  6: "RespawnSpecialGauge_Save",
  7: "SpecialSpec_Up",
  8: "RespawnTime_Save",
  9: "JumpTime_Save",
  10: "SubSpec_Up",
  11: "OpInkEffect_Reduction",
  12: "SubEffect_Reduction",
  13: "Action_Up",
  100: "StartAllUp",
  101: "EndAllUp",
  102: "MinorityUp",
  103: "ComeBack",
  104: "SquidMoveSpatter_Reduction",
  105: "DeathMarking",
  106: "ThermalInk",
  107: "Exorcist",
  108: "ExSkillDouble",
  109: "SuperJumpSign_Hide",
  110: "ObjectEffect_Up",
  111: "SomersaultLanding"
};
GEAR_ABILITY_ID_MAP[-1] = "None";

GEAR_ABILITY_NAME_MAP = {
  "MainInk_Save": 0,
  "SubInk_Save": 1,
  "InkRecovery_Up": 2,
  "HumanMove_Up": 3,
  "SquidMove_Up": 4,
  "SpecialIncrease_Up": 5,
  "RespawnSpecialGauge_Save": 6,
  "SpecialSpec_Up": 7,
  "RespawnTime_Save": 8,
  "JumpTime_Save": 9,
  "SubSpec_Up": 10,
  "OpInkEffect_Reduction": 11,
  "SubEffect_Reduction": 12,
  "Action_Up": 13,
  "StartAllUp": 100,
  "EndAllUp": 101,
  "MinorityUp": 102,
  "ComeBack": 103,
  "SquidMoveSpatter_Reduction": 104,
  "DeathMarking": 105,
  "ThermalInk": 106,
  "Exorcist": 107,
  "ExSkillDouble": 108,
  "SuperJumpSign_Hide": 109,
  "ObjectEffect_Up": 110,
  "SomersaultLanding": 111,
  "None": -1
};

$(document).ready(async function() {
  const fxtoken = getFxToken();
  if(fxtoken == null) return;
  const response = await fetch('https://flexlion3.herokuapp.com/', {
      method: "GET", 
      headers: {
        "authorization": fxtoken
      }
  });
  const result = await response.text();
  if(result != 'hewwo'){
    resetFxToken();
    redirectLogin();
  }
});