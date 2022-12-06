import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <header className='ListApp'>
      <span className='ListItemApp'>
        <NavLink className={({ isActive }) => isActive? 'activeNavLink':'NavLink'} to="/">Home</NavLink>
      </span>
      <span>
        <NavLink className={({ isActive }) => isActive? 'activeNavLink':'NavLink'} to="/pokemon">Pokemons</NavLink>
      </span>
    </header>  
    )
}

export default Navigation;