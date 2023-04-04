function click_img(event)
{
  var target = event.target || event.srcElement;
  var elements = document.getElementsByClassName(target.getAttribute("class"));
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("selected", "false");
  }
  target.setAttribute("selected", "true");
};

function loadAnims(url){
  dropdown = document.getElementById("dropdown");
  jQuery.get(url, data => {
        var lines = data.split("\n");
        // Loop through the lines and add them as options to the select element
        for (var i = 0; i < lines.length; i++) {
          var option = document.createElement("option");
          option.text = lines[i];
          dropdown.add(option);
        }
      },
  );
};

function loadGalleryImgs(){
  galleryImages = document.querySelectorAll('.gallery-image_map');
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      document.querySelector('map img').setAttribute('src', image.src);
      document.querySelector('#mapName').textContent = image.alt;
    });
  });
};

$(document).ready(function () {
  loadAnims("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/animations.txt")
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
  loadGalleryImgs();
});
