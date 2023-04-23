import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonSelect";
import PokemonTypeSelect from "../components/PokemonTypeSelect";
import PokemonSelect from "../components/PokemonSelect";
import BucketList from "../components/BucketList";

const Pokemon = () => {
  const [pokemonTypes, setPokemonTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [sprites, setSprites] = useState(null);
  const [bucketList, setBucketList] = useState([]);
  const [allSprites, setAllSprites] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => {
        setPokemonTypes(data.results);
        // 1. get all pokemonTypes here:
        // console.log(" all types data: ", data);
      });
  }, []);
  // 2. should go to one type and get all pokemons of that type
  const handleTypeSelect = (type) => {
    const index = pokemonTypes.indexOf(type);
    const pokemonsPromises = pokemonTypes.map((pokemonType) => {
      return fetch(pokemonType.url).then((res) => res.json());
      // 3. we are already in one type url
    });
    Promise.all(pokemonsPromises).then((data) => {
      // console.log("data1 has all pokemonTypes: ", data);
      // console.log("data2 has pokemons of this type: ", data[index].pokemon);
      setPokemons(data[index].pokemon);
      // setAllSprites(datadata[index].pokemon)
      setSelectedType(type);
    });
  };

  const handlePokemonSelect = (pokemon) => {
    handleTypeSelect(selectedType);
    const index = pokemons.indexOf(pokemon);
    // console.log("selected pokemon is: ", pokemon);
    // console.log("selected pokemon index in this list is: ", index);
    const allPokemonPromises = pokemons.map((pokemon) => {
      return fetch(pokemon.pokemon.url).then((res) => res.json());
      // 4. we should be able to access one pokemon url
    });
    Promise.all(allPokemonPromises)
      .then((data) => {
        // console.log(
        //   // "data3 has sprites of the selected pokemon: ",
        //   data[index].sprites
        // );
        // console.log("data4 has all pokemons url of this type: ", data);
        // 5. we get all links of this type of pokemons
        setSprites(data[index].sprites);
        setSelectedPokemon(pokemon);
        // 6. we want to get all sprites of the pokemons of this type
      })
      .catch((error) => console.log("Error getting data", error));
  };

  const addToBucketList = (pokemon) => {
    const foundPokemon = bucketList.find((p) => {
      return (p.pokemon.name = pokemon.pokemon.name);
    });
    if (!foundPokemon) {
      const newPokemonList = [...bucketList, pokemon];
      setBucketList(newPokemonList);
    }
    // else {
    //   const newPokemonList = bucketList.filter((p) => {
    //     return p.pokemon.name !== pokemon.pokemon.name;
    //   });
    //   setBucketList(newPokemonList);
    // }
    console.log("clicked event, bucketList: ", bucketList);
    console.log("pockemonType: ", selectedType);
    console.log("selected pockemon: ", selectedPokemon);

    // console.log("pokemons: ", pokemons);
  };
  return (
    <>
      {pokemonTypes ? (
        <PokemonTypeSelect
          pokemonTypes={pokemonTypes}
          handleTypeSelect={handleTypeSelect}
          pokemons={pokemons}
        />
      ) : null}
      {pokemons ? (
        <PokemonSelect
          // somehow pokemons become pokemonTypes
          pokemons={pokemons}
          handlePokemonSelect={handlePokemonSelect}
          sprites={sprites}
          selectedPokemon={selectedPokemon}
          handlePokemonClick={addToBucketList}
        />
      ) : null}
      {bucketList ? <BucketList bucketList={bucketList} /> : null}
    </>
  );
};

export default Pokemon;
