import styled from "styled-components";
const PokemonTypeSelect = ({ pokemonTypes, handleTypeSelect, pokemons }) => {
  const selectOptions = pokemonTypes.map((pokemonType, index) => {
    return (
      <option key={index} value={index}>
        {pokemonType.name}
      </option>
    );
  });

  return (
    <Wrapper>
      <Title>Choose a Pokemon type</Title>
      <SelectInfo
        name="selectType"
        id="selectType"
        onChange={(e) => handleTypeSelect(pokemonTypes[e.target.value])}
      >
        {selectOptions}
      </SelectInfo>
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

export default PokemonTypeSelect;
