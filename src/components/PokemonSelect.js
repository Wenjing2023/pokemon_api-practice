import PokemonItem from "./PokemonItem";

const PokemonSelect = ({
  pokemons,
  handlePokemonSelect,
  selectedPokemon,
  sprites,
}) => {
  const handleChange = (e) => {
    // console.log("what we have in event:", e.target.value);
    handlePokemonSelect(pokemons[e.target.value]);
  };
  if (pokemons == null) {
    return <p>Loading...</p>;
  }
  const pokemonOptions = pokemons.map((pokemon, index) => {
    return (
      <option key={index} value={index}>
        {pokemon.pokemon.name}
      </option>
    );
  });
  
  return (
    <>
      <h2>Choose a pokemon</h2>

      <select name="pokemons" id="pokemons" onChange={handleChange}>
        {pokemonOptions}
      </select>
      <PokemonItem selectedPokemon={selectedPokemon} sprites={sprites} />
     
    </>
  );
};

export default PokemonSelect;
