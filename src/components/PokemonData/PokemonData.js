const PokemonData = ({ pokemon: { sprites, name, stats, moves } }) => {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>Stats
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
          </ul>
          <ul>Moves
        {moves.map(entry => (
          <li key={entry.move.name}>
            {entry.move.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonData;