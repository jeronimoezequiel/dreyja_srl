
/// Ejecutar funciones
document.getElementById('search').addEventListener("click", mostrar_buscador);
document.getElementById('cover-ctn-search').addEventListener("click", ocultar_buscador);

// Buscador de contenido
const bars_search = document.getElementById('search-form');
const cover_search_form = document.getElementById('cover-ctn-search');
const inputSearch = document.getElementById('inputSearch');
const box_search = document.getElementById('box-search');

// Función para mostrar el buscador a partir de las variables de "Buscar contenido"
function mostrar_buscador() {
    // Agregar clases para activar la búsqueda
    $('.menu-item').addClass('hide-item');
    $('.search-form').addClass('active');
    $('.close').addClass('active');

    // Mostrar el cover_search_form
    cover_search_form.style.display = "block";
}

// Función para cerrar el buscador
$('.close').click(function(){
    // Quitar clases para desactivar la búsqueda
    $('.menu-item').removeClass('hide-item');
    $('.search-form').removeClass('active');
    $('.close').removeClass('active');

    // Ocultar el cover_search_form
    cover_search_form.style.display = "none";
    inputSearch.focus();
});

// Función para ocultar el buscador dando clic en la pantalla
function ocultar_buscador (event) {
    
    if (event) {
        event.stopPropagation();
    }
    // Quitar clases para desactivar la búsqueda

    $('.menu-item').removeClass('hide-item');
    $('.search-form').removeClass('active');
    $('.close').removeClass('active');

    // Ocultar el cover_search_form
    cover_search_form.style.display = "none";
    inputSearch.focus();

    if(inputSearch.value === ""){
        box_search.style.display = "none";
    }
    

};

// Agrega el manejador de eventos al contenedor de búsqueda
box_search.addEventListener("click", function(event) {
    // Evita que el clic se propague al contenedor principal
    event.stopPropagation();
});

// Filtrado de búsqueda
document.getElementById('inputSearch').addEventListener("input", buscador_interno);

// Variable para rastrear la opción resaltada
var highlightedOptionIndex = -1;

function buscador_interno() {
    var filter, li, a, textValue;
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    // Recorre elementos a filtrar mediante los "li"
    for (var i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === "") {
                box_search.style.display = "none";
            }
        } else {
            li[i].style.display = "none";
        }

        // Agrega un manejador de eventos al hacer clic en un elemento de la lista
        a.addEventListener("click", function() {
            // Coloca el texto del elemento seleccionado en la barra de búsqueda
            inputSearch.value = this.textContent;

            // Oculta la lista de búsqueda después de seleccionar un elemento
            box_search.style.display = "none";
        });
    };
};




