import axios from 'axios';

async function fetchListPokemon() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
  return data;
}

async function fetchListPokemonNext(data) {
  const  res  = await axios.get(`${data}`);
  return res.data;
}

async function fetchListPokemonPast(data) {
  const  res  = await axios.get(`${data}`);
  return res.data;
}

async function fetchSortedPokemons(type) {
  const  res  = await axios.get(`https://pokeapi.co/api/v2/pokemon?&limit=20&type/${type}`);
  console.log(`res`, res);
  return res;
}

async function fetchPokemon(name) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
}

const api = {
  fetchPokemon,
  fetchListPokemon,
  fetchListPokemonNext,
  fetchSortedPokemons,
  fetchListPokemonPast,
};

export default api;
