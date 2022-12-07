import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from '../../services/pokemon-api';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonAPI.fetchListPokemon();
      return pokemons;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchPokemonsNext = createAsyncThunk(
  'pokemons/paginationPokemons',
  async (next, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonAPI.fetchListPokemonNext(next);
      return pokemons;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchPokemonsPast = createAsyncThunk(
  'pokemons/paginationPokemonsBack',
  async (previous, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonAPI.fetchListPokemonPast(previous);
      return pokemons;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const sortedPokemons = createAsyncThunk(
  'pokemons/paginationPokemons',
  async (params, { rejectWithValue }) => {
    try {
      const pokemons = await pokemonAPI.fetchSortedPokemons(params);
      return pokemons.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);