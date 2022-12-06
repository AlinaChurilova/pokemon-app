// import { Component } from "react";

// export default class App extends Component {

//   componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(console.log);
//   }
  
//   render() {
//     return (
//       <div>Pokemon</div>
//     )
//   }
// };

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import PokemonView from 'views/PokemonView';
import Navigation from 'components/Navigation';

// const SearchForm = lazy(() => import("components/SearchForm"));
// const PokemonView = lazy(() => import("views/PokemonView"));
const PokemonsList = lazy(() => import("components/PokemonsList"));
const PokemonInfo = lazy(() => import("components/PokemonInfo"));


const App = () => (
    <>
    <Navigation/>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
                <Route path="/" element={<PokemonsList />} />
                <Route path="/pokemon/:name" element={<PokemonInfo />}/>
         <Route path="/pokemon" element={<PokemonView />} />
    </Routes>
   </Suspense>
  </>
);

export default App;
