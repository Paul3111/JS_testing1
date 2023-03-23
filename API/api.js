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
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
   .then((response) => {
    return response.json()
})
    .then((data) => {
        console.log(`Name: ${data.name}`) 
        console.log(`ID: ${data.id}`) 
        console.log(`Height: ${data.height}`) 
        console.log(`Weight: ${data.weight}`) 
    })
};


module.exports = fetchPokemon;