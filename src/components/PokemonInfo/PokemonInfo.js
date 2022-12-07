import { useState, useEffect } from 'react';
import PokemonData from '../PokemonData';
import pokemonAPI from '../../services/pokemon-api';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const PokemonInfo = ({ pokemonName }) => {
    const {name} = useParams()
  const [pokemon, setPokemon] = useState(null);
  const [, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);
    
    useEffect(() => {
        if (!name) {
            return;
        }
        setStatus(Status.PENDING)

        pokemonAPI
        .fetchPokemon(name)
        .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    }, [name])

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Please enter pokemon name</div>;
  }

  if (status === Status.PENDING) {
    return <div>Loading...</div>;
  }

  if (status === Status.REJECTED) {
    return  Notiflix.Notify.failure('Not found. Please try again.');
  }

  if (status === Status.RESOLVED) {
    return <PokemonData pokemon={pokemon} />;
  }
}

export default PokemonInfo;