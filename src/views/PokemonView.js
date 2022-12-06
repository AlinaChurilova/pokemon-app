import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchForm from '../components/SearchForm';
import PokemonInfo from '../components/PokemonInfo';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}