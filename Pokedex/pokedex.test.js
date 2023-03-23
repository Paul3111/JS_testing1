const Pokedex = require('./pokedex')

describe('Pokedex.', () => {
  it('Catches a pokemon.', () => {
    pokedex1 = new Pokedex()
    pokedex1.catch('pikachu')
    expect(pokedex1.all()).toEqual (['pikachu'])
  });

  it('Catches two pokemons.', () => {
    pokedex1 = new Pokedex()
    pokedex1.catch('pikachu')
    pokedex1.catch('somethingelsechu')
    expect(pokedex1.all()).toEqual (['pikachu', 'somethingelsechu'])
  });

  it('Catches four pokemons and puts them in the pokebag after 1 second then another pokemon...', () => {
    pokedex1 = new Pokedex()
    pokedex1.catch('pikachu')
    pokedex1.wait(1000)
    pokedex1.catch('somethingelsechu')
    pokedex1.wait(1000)
    pokedex1.catch('pikachu')
    pokedex1.wait(1000)
    pokedex1.catch('pikachu')
    pokedex1.wait(1000)
    //pokedex1.timer_total()
    expect(pokedex1.timer_total()).toEqual (4000)
  });
});