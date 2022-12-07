import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PokemonInfo from '../components/PokemonInfo';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}