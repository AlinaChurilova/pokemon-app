import axios from 'axios';

async function fetchListPokemon() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
  return data;
}

async function fetchPokemon(name) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
}

// function fetchPokemon(name) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`Нет покемона с именем ${name}`));
//   });
// }

// function fetchListPokemon () {
//   return fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20').then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   });
// }

const api = {
  fetchPokemon,
  fetchListPokemon,
};

export default api;



// 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'  - забрать всех покемонов