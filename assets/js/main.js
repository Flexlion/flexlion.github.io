function click_img(event)
{
  var target = event.target || event.srcElement;
  var elements = document.getElementsByClassName(target.getAttribute("class"));
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("selected", "false");
  }
  target.setAttribute("selected", "true");
};

const loadAnims = url => {
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
});

  // Selecciona todas las imágenes de la galería
  const galleryImages = document.querySelectorAll('.gallery-image_map');

  // Itera sobre cada imagen de la galería y agrega un evento click a cada una
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      // Actualiza la imagen en el botón del mapa
      const mapButton = document.querySelector('map img');
      mapButton.setAttribute('src', image.src);

      // Obtiene el nombre del mapa a partir del atributo alt de la imagen
      const mapName = image.alt;

      // Actualiza el texto del elemento p correspondiente al nombre del mapa
      const mapNameElement = document.querySelector('#mapName');
      mapNameElement.textContent = mapName;
    });
  });
