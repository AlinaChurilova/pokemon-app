import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonsNext, sortedPokemons, fetchPokemonsPast } from './pokemonsOperations';

const entities = createReducer([], {
  [fetchPokemons.fulfilled]: (_, {payload}) => payload,
  [fetchPokemonsNext.fulfilled]: (_, { payload }) => payload,
  [fetchPokemonsPast.fulfilled]: (_, { payload }) => payload,
  [sortedPokemons.fulfilled]: (_, { payload }) => payload, 
});

export default combineReducers({
  entities,
});