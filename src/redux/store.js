import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemons/pokemonsReducer";

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
    },
})