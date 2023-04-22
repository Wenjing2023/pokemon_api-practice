const PokemonTypeSelect = ({ pokemonTypes, handleTypeSelect, pokemons }) => {
  console.log("data 2 pokemons here:", pokemons);
  const selectOptions = pokemonTypes.map((pokemonType, index) => {
    return (
      <option key={index} value={index}>
        {pokemonType.name}
      </option>
    );
  });

  return (
    <>
      <h3>Choose a Pokemon type</h3>
      <select
        name="selectType"
        id="selectType"
        onChange={(e) => handleTypeSelect(pokemonTypes[e.target.value])}
      >
        {selectOptions}
      </select>
    </>
  );
};

export default PokemonTypeSelect;
