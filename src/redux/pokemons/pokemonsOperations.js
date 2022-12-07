import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from '../../services/pokemon-api';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonAPI.fetchListPokemon();
      return pokemons.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);