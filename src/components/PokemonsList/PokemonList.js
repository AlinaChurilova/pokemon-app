import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import pokemonAPI from '../../services/pokemon-api';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonsOperations, pokemonsSelector } from '../../redux/pokemons';

export default function Home() {
    // const [pokemons, setPokemons] = useState([]);
    const dispatch = useDispatch();
    const pokemons = useSelector(pokemonsSelector.getPokemons);

    // useEffect(() => {
    //     pokemonAPI.fetchListPokemon().then(pokemons => setPokemons(pokemons.results))
    // }, [])

    useEffect(() => {
        dispatch(pokemonsOperations.fetchPokemons())
    }, [dispatch]);

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