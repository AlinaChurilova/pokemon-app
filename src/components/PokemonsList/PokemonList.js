import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pokemonAPI from '../../services/pokemon-api';

export default function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        pokemonAPI.fetchListPokemon().then(pokemons => setPokemons(pokemons.results))
    }, [])
    

    return (
        <ul>
            {pokemons?.map(({ name }) => (
                <li key={name}>
                    <Link to={`/pokemon/${name}`}>{name}</Link>  
                 </li>
            ))}
        </ul>
    )
}