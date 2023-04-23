import styled from "styled-components";
const PokemonItem = ({ selectedPokemon, sprites, handlePokemonClick }) => {
  if (!selectedPokemon || !sprites) return;
  return (
    <>
      <br />
      <Name>Name: {selectedPokemon.pokemon.name}</Name>
      <Image
        src={sprites["back_default"]}
        alt={selectedPokemon.pokemon.name}
        onClick={() => {
          handlePokemonClick(selectedPokemon);
        }}
      />
    </>
  );
};

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  object-fit: cover;
  width: 20%;
  height: 20%;
  image-resolution: from-image;
`;
const Name = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1rem;
  text-align: left;
`;
export default PokemonItem;
