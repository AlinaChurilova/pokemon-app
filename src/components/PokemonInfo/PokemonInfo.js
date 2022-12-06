import { useState, useEffect } from 'react';
import PokemonData from '../PokemonData';
import pokemonAPI from '../../services/pokemon-api';
import { useParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const PokemonInfo = ({ pokemonName }) => {
    const {name} = useParams()
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
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
    return <div>Введите имя покемона.</div>;
  }

  if (status === Status.PENDING) {
    return <div>Загружаем...</div>;
  }

  if (status === Status.REJECTED) {
    return  <div>Не найдено. Повторите попытку.</div>;
  }

  if (status === Status.RESOLVED) {
    return <PokemonData pokemon={pokemon} />;
  }
}

export default PokemonInfo;