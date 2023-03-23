function fetchPokemon(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//function printEnd () {
//    console.log('End of File');
//};

//setTimeout(printEnd, 3000);

module.exports = fetchPokemon;