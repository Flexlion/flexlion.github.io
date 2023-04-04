var WeaponInfoMain;
var GearInfoHead;
var GearInfoClothes;
var GearInfoShoes;
var VersusSceneInfo;
var langEUen;

function click_img(event)
{
  var target = event.target;
  var elements = document.getElementsByClassName(target.getAttribute("class"));
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("selected", "false");
  }
  target.setAttribute("selected", "true");
};

function loadAnims(url){
  var dropdown = document.getElementById("dropdown");
  jQuery.get(url, data => {
        var lines = data.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var option = document.createElement("option");
          option.text = lines[i];
          dropdown.add(option);
        }
      },
  );
};

function onRsdbEntrySelect(target){
  document.getElementById(target.getAttribute('resultImg')).setAttribute('src', target.src);
  var info = document.getElementById(target.getAttribute('resultInfo'));
  info.setAttribute("rsdb_id", target.getAttribute("rsdb_id"));
  info.textContent = target.alt;
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
    "image-gallery_map",
    "gallery-image_map",
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
    "image-gallery_weapon",
    "gallery-image_weapon",
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
    "image-gallery_gear",
    "gallery-image_gear",
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

function load_options(){
  loadMaps();
  loadWeapons();
  loadGear("modalHed", GearInfoHead, "CommonMsg/Gear/GearName_Head", "chosenHedImg", "chosenHedInfo");
  loadGear("modalClt", GearInfoClothes, "CommonMsg/Gear/GearName_Clothes", "chosenCltImg", "chosenCltInfo");
  loadGear("modalShs", GearInfoShoes, "CommonMsg/Gear/GearName_Shoes", "chosenShsImg", "chosenShsInfo");
};

function load_options_run(){
  jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/WeaponInfoMain", data => {
    WeaponInfoMain = data;
    jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/VersusSceneInfo", data => {
      VersusSceneInfo = data;
      jQuery.getJSON("https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/data/language/EUen.json", data => {
        langEUen = data;
        jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/GearInfoHead", data => {
          GearInfoHead = data;
          jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/GearInfoClothes", data => {
            GearInfoClothes = data;
            jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/GearInfoShoes", data => {
              GearInfoShoes = data;
              load_options();
            });
          });
        });
      });
    });
  });
};

$(document).ready(function () {
  $('.gallery-image').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_skin').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_eyecolor').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_hair').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_eyebrow').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_pants').click(function(event) {
    click_img(event);
  });
  $('.gallery-image_map').click(function(event) {
    click_img(event);
  });
  loadAnims("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/animations.txt");
  load_options_run();
});
