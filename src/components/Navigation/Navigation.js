import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <header class='listApp'>
      <span>
        <NavLink className={({ isActive }) => isActive? 'activeNavLink':'navLink'} to="/">Home</NavLink>
      </span>
      <span>
        <NavLink className={({ isActive }) => isActive? 'activeNavLink':'navLink'} to="/pokemon">Pokemons</NavLink>
      </span>
    </header>  
    )
}

export default Navigation;