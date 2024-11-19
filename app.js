/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon() {
    const pokemon = document.getElementById('pokemon-input').value.toLowerCase(); // Cojo el contenido del input con el nombre del Pokémon
    const informacionPokemon = document.getElementById('pokemon-data'); // Cojo el contenedor donde se mostrará la información del Pokémon
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon); // Realizo una consulta a la API de Pokémon
    
    if (!response.ok) { // Verifico si la respuesta de la API es exitosa
        throw new Error('Error al cargar el archivo.'); // Si la respuesta no es ok, lanzo un error y el resto del código no se ejecuta
    }
    
    const datos = await response.json(); // Convierto la respuesta de la API a un objeto JSON con la información del pokemon elegido
    console.log(datos) // Para ir viendo lo que me devuelve

    let idPokemon = informacionPokemon.querySelector("#id"); // Busco el párrafo con el id "id" dentro del div

    if(!idPokemon) { // Si no existe el párrafo con el id "id", lo creo
        idPokemon = document.createElement("p"); // Creo el elemento <p>
        idPokemon.id = "id"; // Asigno el id "id" al nuevo párrafo
        informacionPokemon.appendChild(idPokemon); // Lo agrego al contenedor de la información del Pokémon
    }

    idPokemon.textContent = "ID: " + datos.id; // Asigno el texto con el ID del Pokémon obtenido de la API

    let nombrePokemon = informacionPokemon.querySelector("#name"); // Busco el párrafo con el id "name" dentro del contenedor

    if (!nombrePokemon) { // Si no existe el párrafo con el id "name", lo creo
        nombrePokemon = document.createElement("p"); // Creo el elemento <p>
        nombrePokemon.id = "name" // Asigno el id "name" al nuevo párrafo
        informacionPokemon.appendChild(nombrePokemon); // Lo agrego al contenedor de la información del Pokémon
    }
    
    nombrePokemon.innerHTML = "Nombre: " + datos.name; // Asigno el nombre del Pokémon obtenido de la API al nuevo párrafo

    let imgPokemon = informacionPokemon.querySelector("img"); // Busco la etiqueta <img> dentro del contenedor

    if (!imgPokemon) { // Si no existe una etiqueta <img>, la creo
        imgPokemon = document.createElement("img"); // Creo el elemento <img>
        informacionPokemon.appendChild(imgPokemon); // Lo agrego al contenedor de la información del Pokémon
    }

    imgPokemon.src = datos.sprites.front_default; // Asigno la URL de la imagen del Pokémon obtenida de la API al atributo "src" de la etiqueta <img>
}

/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemon);