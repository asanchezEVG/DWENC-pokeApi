/**
 * Ejercicio 2: buscar pokemon con Promises.
 */

function buscarPokemonPromise(){
    const pokemon = document.getElementById('pokemon-input').value.toLowerCase();
    const informacionPokemon = document.getElementById('pokemon-data');

    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(response => {
            if(!response.ok)
                throw new Error('Error al cargar el archivo');
            return response.json();
        })
        .then(datos => {
            let idPokemon = informacionPokemon.querySelector("#id");

            if(!idPokemon) {
                idPokemon = document.createElement("p");
                idPokemon.id = "id";
                informacionPokemon.appendChild(idPokemon);
            }

            idPokemon.textContent = "ID: " + datos.id;

            let nombrePokemon = informacionPokemon.querySelector("#name");

            if(!nombrePokemon) {
                nombrePokemon = document.createElement("p");
                nombrePokemon.id = "name";
                informacionPokemon.appendChild(nombrePokemon);
            }

            nombrePokemon.textContent = "Nombre: " + datos.name;
        })
        .catch(error => console.log('Error: ', error));
}

/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemonPromise);