/*
function fetchPokemon(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function printEnd () {
    console.log('End of File');
};

setTimeout(printEnd, 3000);

*/

function fetchPokemon(pokemonName) {
   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
   .then((response) => {
    return response.json()
})
    .then((data) => {
        const types = data.types.map((element) => element.type.name);
       return {name: data.name, id: data.id, height: data.height, weight: data.weight, types: types};
    });
};


module.exports = fetchPokemon;
