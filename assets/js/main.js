var WeaponInfoMain;
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

function onVsMapSelect(target){
  document.getElementById('chosenMapImg').setAttribute('src', target.src);
  var mapInfo = document.getElementById('chosenMapInfo');
  mapInfo.setAttribute("map_id", target.getAttribute("map_id"));
  mapInfo.textContent = target.alt;
}

function loadGalleryImgs(){
  const mapPerLine = 4;

  var mapNames = langEUen["CommonMsg/VS/VSStageName"];

  var modalMapBody = document.getElementById("modalMap").getElementsByClassName("modal-body")[0];

  for(var i = 0; i < VersusSceneInfo.length / mapPerLine; i++){

    var mapGallery = document.createElement("div");
    mapGallery.setAttribute("class", "image-gallery_weapon");

    for(var mapId = i * mapPerLine; mapId < Math.min((i + 1) * mapPerLine, VersusSceneInfo.length); mapId++){
      var versusMap = new Image();

      var mapName = VersusSceneInfo[mapId]["__RowId"].slice(4);
      if(/\d$/.test(mapName)) mapName = mapName.slice(0, mapName.length - 2);

      
      if(mapName in mapNames) versusMap.alt = mapNames[mapName];
      else versusMap.alt = mapName;
      
      versusMap.src = "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/stage/Vss_" + mapName + ".png";
      versusMap.setAttribute("map_id", VersusSceneInfo[mapId]["Id"]);

      versusMap.onerror = function(event){
        var target = event.target || event.srcElement;
        target.src = 'https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/stage/Dummy.png'; // No Icon
      };
      versusMap.addEventListener('click', (event) => {
        var target = event.target;
        onVsMapSelect(target);
      });
      versusMap.setAttribute("width", "160");
      versusMap.setAttribute("height", "90");
      versusMap.setAttribute("class", "gallery-image_map");
      versusMap.setAttribute("data-dismiss", "modal");
      mapGallery.appendChild(versusMap);

      if(mapId == 0) onVsMapSelect(versusMap);
    }
    modalMapBody.appendChild(mapGallery);
  }
};

function onWeaponSelect(target){
  document.getElementById('chosenWeaponImg').setAttribute('src', target.src);
  var weaponInfo = document.getElementById('chosenWeaponInfo');
  weaponInfo.setAttribute("weapon_id", target.getAttribute("weapon_id"));
  weaponInfo.textContent = target.alt;
}

function loadWeapons(){
  const weapPerLine = 6;

  var weaponNames = langEUen["CommonMsg/Weapon/WeaponName_Main"];

  var modalWpnBody = document.getElementById("modalWpn").getElementsByClassName("modal-body")[0];
  var validInfos = [];
  for(var i = 0; i < WeaponInfoMain.length; i++){
    if(WeaponInfoMain[i]["Type"] != "Versus") continue; // Only add obtainable weapons
    validInfos.push(WeaponInfoMain[i]);
  }
  for(var i = 0; i < validInfos.length / weapPerLine; i++){

    var weapGallery = document.createElement("div");
    weapGallery.setAttribute("class", "image-gallery_weapon");

    for(var weapId = i * weapPerLine; weapId < Math.min((i + 1) * weapPerLine, validInfos.length); weapId++){
      var weapon = new Image();
      var codeName = validInfos[weapId]["__RowId"];
      
      if(codeName in weaponNames) weapon.alt = weaponNames[codeName];
      else weapon.alt = codeName;
      
      weapon.src = "https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/weapon/Wst_" + validInfos[weapId]["__RowId"] + ".png";
      weapon.setAttribute("weapon_id", validInfos[weapId]["Id"]);

      weapon.onerror = function(event){
        var target = event.target || event.srcElement;
        target.src = 'https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/images/weapon/Dummy.png'; // No Icon
      };
      weapon.addEventListener('click', (event) => {
        var target = event.target;
        onWeaponSelect(target);
      });
      weapon.setAttribute("width", "90");
      weapon.setAttribute("height", "90");
      weapon.setAttribute("class", "gallery-image_weapon");
      weapon.setAttribute("data-dismiss", "modal");
      weapGallery.appendChild(weapon);

      if(weapId == 0) onWeaponSelect(weapon);
    }
    modalWpnBody.appendChild(weapGallery);
  }
};

function load_options(){
  loadGalleryImgs();
  loadWeapons();
};

function load_options_run(){
  jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/WeaponInfoMain", data => {
    WeaponInfoMain = data;
    jQuery.getJSON("https://flexlion3.herokuapp.com/RSDB/VersusSceneInfo", data => {
      VersusSceneInfo = data;
      jQuery.getJSON("https://raw.githubusercontent.com/Leanny/leanny.github.io/master/splat3/data/language/EUen.json", data => {
        langEUen = data;
        load_options();
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
