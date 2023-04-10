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

function getRsdbInfoByName(rsdbData, name){
    for(var i = 0; i < rsdbData.length; i++){
      if(rsdbData[i]["__RowId"] == name) return rsdbData[i];
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

  document.getElementById("hair_msn310").src = "./assets/img/player/hair/" + getRsdbInfoById(HairInfo, 500)["__RowId"] + suffix;
};