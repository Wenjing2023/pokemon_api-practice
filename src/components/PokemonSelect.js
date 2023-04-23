import PokemonItem from "./PokemonItem";
import styled from "styled-components";
const PokemonSelect = ({
  pokemons,
  handlePokemonSelect,
  selectedPokemon,
  sprites,
  handlePokemonClick,
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
    <Wrapper>
      <Title>Choose a pokemon</Title>

      <SelectInfo name="pokemons" id="pokemons" onChange={handleChange}>
        {pokemonOptions}
      </SelectInfo>
      <PokemonItem
        selectedPokemon={selectedPokemon}
        sprites={sprites}
        handlePokemonClick={handlePokemonClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 30px;
`;
const Title = styled.h3`
  font-family: cursive;
  font-style: italic;
  font-size: 1.5rem;
`;
const SelectInfo = styled.select`
  text-align: center;
  font-family: system-ui;
  font-size: medium;
  border-radius: 5px;
  border-style: ridge;
  background-color: #9eb294;
  border: thin solid blue;
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin: 0;
`;

export default PokemonSelect;
