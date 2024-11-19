
// ---------- 3---------

// function buscarPokemonJQueryAJAX() {
//     const pokemon = $('#pokemon-input').val().toLowerCase();
//     const infoPokemon = $('#pokemon-data');

//     $.ajax({
//         url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
//         method: 'GET',
//         success: function(data) {
//             infoPokemon.html(`
//                 <p>Nombre: ${data.name}</p>
//                 <p>ID: ${data.id}</p>
//                 <img src="${data.sprites.front_default}" alt="${data.name}">
//             `);
//         },
//         error: function() {
//             infoPokemon.html('<p>Pokémon no encontrado.</p>');
//         }
//     });
// }

// // Descomenta la siguiente línea si quieres usar esta función con el botón "Buscar"
// // $('#search-btn').on('click', buscarPokemonJQueryAJAX);
// ------ 4 -------

// let coleccion = [];

// function agregarPokemonAColeccion() {
//     const nombre = $('#pokemon-data p:first').text().replace('Nombre: ', '');
//     const sprite = $('#pokemon-data img').attr('src');

//     if (nombre && sprite) {
//         coleccion.push({ nombre, sprite });
//         alert(`${nombre} agregado a la colección.`);
//     }
// }

// function verColeccion() {
//     const coleccionLista = $('#collection-list');
//     coleccionLista.html('');
//     coleccion.forEach(pokemon => {
//         coleccionLista.append(`
//             <p>Nombre: ${pokemon.nombre}</p>
//             <img src="${pokemon.sprite}" alt="${pokemon.nombre}">
//         `);
//     });
//     $('#collection-section').removeClass('hidden');
// }

// $('#view-collection-btn').on('click', verColeccion);


// <section id="search-section">
//     <h2>Busca un Pokémon</h2>
//     <input type="text" id="pokemon-input" placeholder="Escribe el nombre de un Pokémon (ej. ditto)">
//     <button id="search-btn">Buscar</button>
//     <button onclick="agregarPokemonAColeccion()">Agregar a la colección</button>
// </section>

// ------- 5 ------

// <section id="filter-section">
//     <h2>Filtrar Pokémon por Tipo</h2>
//     <input type="text" id="pokemon-type-input" placeholder="Escribe un tipo de Pokémon (ej. fuego)">
//     <button onclick="filtrarPokemonPorTipo()">Filtrar</button>
//     <div id="type-results">
//         <!-- Aquí se mostrarán los resultados de los Pokémon por tipo -->
//     </div>
// </section>


// function filtrarPokemonPorTipo() {
//     const tipo = document.getElementById("pokemon-type-input").value.toLowerCase();
//     const typeResults = document.getElementById("type-results");
    
//     fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
//         .then(response => response.json())
//         .then(data => {
//             const promesas = data.pokemon.slice(0, 5).map(poke => fetch(poke.pokemon.url).then(res => res.json()));
//             return Promise.all(promesas);
//         })
//         .then(resultados => {
//             typeResults.innerHTML = '';
//             resultados.forEach(pokemon => {
//                 typeResults.innerHTML += `
//                     <p>Nombre: ${pokemon.name}</p>
//                     <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//                 `;
//             });
//         })
//         .catch(error => {
//             typeResults.innerHTML = '<p>Error al filtrar Pokémon por tipo.</p>';
//         });
// }

// async function buscarPokemon() {
//     const pokemon = document.getElementById('pokemon-input').value.toLowerCase();
//     const infoPokemon = document.getElementById('pokemon-data');

//     fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
//         .then(function(response) {
//             if (!response.ok) 
//                 throw new Error('Pokémon no encontrado');
//             return response.json();
//         })
//         .then(function(data) {
//             infoPokemon.innerHTML = 
//                 '<p>Nombre: ' + data.name + '</p>' +
//                 '<p>ID: ' + data.id + '</p>' +
//                 '<img src="' + data.sprites.front_default + '" alt="' + data.name + '">';
//         })
//         .catch(function(error) {
//             infoPokemon.innerHTML = '<p>' + error.message + '</p>';
//         });
// }

// document.getElementById('search-btn').addEventListener('click', buscarPokemon);