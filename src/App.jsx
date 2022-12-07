import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import PokemonView from 'views/PokemonView';
import Navigation from 'components/Navigation';

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
