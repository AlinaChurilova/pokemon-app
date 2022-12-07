import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonsOperations, pokemonsSelector } from '../../redux/pokemons';

const pokemonTypes = [
    'no_damage_to',
    'half_damage_to',
    'double_damage_to',
    'no_damage_from',
    'half_damage_from',
    'double_damage_from',
]

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(pokemonsSelector.getPokemons);
    const next = useSelector(pokemonsSelector.getPagination)
    const previous = useSelector(pokemonsSelector.getLastPagination)

    useEffect(() => {
        dispatch(pokemonsOperations.fetchPokemons())
    }, [dispatch]);

    const handleSubmit = () => {
        dispatch(pokemonsOperations.fetchPokemonsNext(next));
    }

     const onHandleSubmit = () => {
        dispatch(pokemonsOperations.fetchPokemonsPast(previous));
    }

     const onSelectChange = (type) => {
        dispatch(pokemonsOperations.sortedPokemons(type));
    }
   
    return (
        <>
        <select onChange={(e) => onSelectChange(e.currentTarget.value)}>
            {pokemonTypes.map(type => <option>{type}</option>)}      
        </select>
        <ul>
            {pokemons?.map(({ name }) => (
                <li key={name}>
                    <Link to={`/pokemon/${name}`}>{name}</Link>  
                 </li>
            ))}
        </ul>
        <div>
            <button class="btnBack" onClick={onHandleSubmit}>Go back</button>
            <button onClick={handleSubmit}>Load more...</button>
        </div>
        </>
    )
}