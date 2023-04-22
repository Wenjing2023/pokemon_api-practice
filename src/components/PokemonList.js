const PokemonList = ({ pokemons }) => {
  // we want to get a list of all this selectedType of pokemons showing name and img
  const allPokemons = pokemons.map((pokemon) => {
    <img src={pokemon.sprites["back_default"]} alt={pokemon.pokemon.name} />;
    <p>name: {pokemon.pokemon.name}</p>;
  });
  return <>{allPokemons}</>;
};

export default PokemonList;
