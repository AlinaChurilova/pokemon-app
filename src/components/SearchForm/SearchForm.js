import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';

const styles = { form: { marginBottom: 20 } };

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      Notiflix.Notify.info(`Please enter pokemon name`);
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form class="searchForm" onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
        placeholder="Search pokemons..."
      />
      <button type="submit" class="searchForm-button">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  );
}

export default PokemonForm;