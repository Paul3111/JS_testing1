const fetchPokemon = require('./api')

describe('fetchPokemon', () => {
  it('Returns a promise of the useful pokemon data.', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        done();
      });
  });

  it('Returns a promise of the useful pokemon data.', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.height).toEqual(17);
        done();
      });
  });
});