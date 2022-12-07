import { Link, useLocation } from "react-router-dom";
import { ImUndo2 } from "react-icons/im";

const PokemonData = ({ pokemon: { sprites, name, stats, moves } }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  
  return (
    <>
    <div>
      <Link class="goBack" to={backLinkHref}>
          <span>
            <ImUndo2 style={{marginRight: 8}} />
          </span>
            Go back
      </Link>
    </div>
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
      </>
  );
}

export default PokemonData;