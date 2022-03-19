import React, { useState } from "react";
import axios from "axios";

const FetchComponent = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const fetchPokemonThen = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => {
        return response.json();
      })
      .then((jsonReponse) => {
        console.log(jsonReponse);
        setAllPokemon(jsonReponse.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchPokemonAxios = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => {
        console.log(response.data.results);
        setAllPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={fetchPokemonThen}>Fetch Pokemon by fetch .then</button>
      <button onClick={fetchPokemonAxios}>Fetch Pokemon by fetch AXIOS</button>
      {allPokemon.map((pokemon, i) => {
        return pokemon ? (
          <div key={i}>
            <h1>{pokemon.name}</h1>
            {/* <img src={pokemon.sprites.front_default} /> */}
          </div>
        ) : (
          <h1>Fetch a Pokemon by clicking the button!</h1>
        );
      })}
    </div>
  );
};

export default FetchComponent;
