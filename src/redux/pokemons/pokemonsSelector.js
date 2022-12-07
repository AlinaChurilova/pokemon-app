export const getPokemons = state => state.pokemons.entities.results;
export const getPagination = state => state.pokemons.entities.next;
export const getLastPagination = state => state.pokemons.entities.previous;