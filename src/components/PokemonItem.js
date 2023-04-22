const PokemonItem = ({ selectedPokemon, sprites }) => {
  if (!selectedPokemon || !sprites) return;
  return (
    <>
      <br />
      <img src={sprites["back_default"]} alt={selectedPokemon.pokemon.name} />
      <p>Name: {selectedPokemon.pokemon.name}</p>
    </>
  );
};

export default PokemonItem;
