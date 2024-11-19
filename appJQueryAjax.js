/**
 * Ejercicio 3: buscar pokemon sin Promises en jQuery.
 */

function buscarPokemonJQueryAjax() {
    const pokemon = $('#pokemon-input').val().toLowerCase(); // Obtiene el valor del input de búsqueda, lo convierte a minúsculas
    const informacionPokemon = $('#pokemon-data'); // Selecciona el contenedor donde se mostrará la información del Pokémon

    $.ajax({ // Realiza una solicitud AJAX a la API de Pokémon
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon, // La dirección a donde enviar la solicitud
        method: 'GET', // Método de solicitud, en este caso GET para obtener datos
        dataType: "json", // Especifica que espera una respuesta en formato JSON, y jQuery la convertirá automáticamente en un objeto JavaScript
        success: datos => { // Función que se ejecuta si la solicitud es exitosa
            informacionPokemon.empty();
            let idPokemon = $("#idPok"); // Busca el elemento con id "idPok" en el contenedor de información

            // Si el elemento no existe, lo crea y lo añade al contenedor
            if(idPokemon.length === 0) {
                idPokemon = $("<p>", {id: "idPok"}); // Si no existe, crea un nuevo elemento <p> con id "idPok"
                $("#pokemon-data").append(idPokemon); // Añade el elemento <p> recién creado al contenedor con id "pokemon-data"
            }

            idPokemon.text("ID: " + datos.id); // Actualiza el contenido del elemento con el ID del Pokémon

            let namePokemon = $("#name"); // Busca el elemento con id "name" en el contenedor de información

            // Si el elemento no existe, lo crea y lo añade al contenedor
            if(namePokemon.length === 0) {
                namePokemon = $("<p>", {id: "name"}); // Si no existe, crea un nuevo elemento <p> con id "name"
                $("#pokemon-data").append(namePokemon); // Añade el elemento <p> recién creado al contenedor con id "pokemon-data"
            }

            namePokemon.text("Nombre: " + datos.name); // Actualiza el contenido del elemento con el nombre del Pokémon

            let imgPokemon = $("#imgPok"); // Busca el elemento con id "imgPok" en el contenedor de información

            // Si el elemento no existe, lo crea y lo añade al contenedor
            if(imgPokemon.length === 0) {
                imgPokemon = $("<img>", {id: "imgPok"}); // Si no existe, crea un nuevo elemento <img> con id "imgPok"
                $("#pokemon-data").append(imgPokemon); // Añade el elemento <img> recién creado al contenedor con id "pokemon-data"
            }

            imgPokemon.attr("src", datos.sprites.front_shiny); // Actualiza el atributo "src" de la imagen con el sprite del Pokémon

            const boton = $('<button>')
                .text('Añadir a la colección')
                .addClass('btn-style');

            informacionPokemon.append(boton);

            $(boton).on('click', () => { // Añade el manejador de clic al botón
                localStorage.setItem(datos.name, datos.sprites.front_shiny); // Guarda la imagen del Pokémon en el almacenamiento local
            });
        },
        error: () => { // Manejo de errores
            $('#pokemon-data').html('<p>Pokémon no encontrado o error en la solicitud.</p>'); // Usamos $ para limpiar e insertar mensaje de error
        }
    });
}

/**
 *  Añade un evento click al botón de búsqueda que ejecuta la función buscarPokemon
 */
$('#search-btn').on('click', buscarPokemonJQueryAjax);

function visualizarColeccion() {
    const coleccion = $('#collection-list');
    coleccion.empty(); // Limpiar la lista antes de agregar los elementos

    const miColeccion = Object.keys(localStorage); // Obtener todos los elementos de la colección
    miColeccion.forEach(pokemon => {
        const nombrePokemon = $('<p>') // Crear el párrafo para el nombre del Pokémon
            .text(pokemon)
            .addClass('pokemon-name');
        
        const img = $('<img>') // Crear la imagen del Pokémon
            .attr('src', localStorage.getItem(pokemon))
            .attr('alt', pokemon);

        const eliminar = $('<button>') // Crear el botón para eliminar el Pokémon
            .text('Eliminar')
            .addClass('btn-style');

        eliminar.on('click', () => {
            localStorage.removeItem(pokemon); // Eliminar el Pokémon de la colección
            visualizarColeccion(); // Actualizar la vista de la colección
        });

        // Añadir la imagen y el botón a la colección
        coleccion.append($('<div>').append(nombrePokemon).append(img).append(eliminar));
    });
}

$('#view-collection-btn').on('click', visualizarColeccion);