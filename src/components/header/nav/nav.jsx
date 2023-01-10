import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav className='nav-menu'>
      <ul className='list-nav'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/new'>New</NavLink>
        </li>
        <li>
          <NavLink to='/popular'>Popular</NavLink>
        </li>
        <li>
          <NavLink to='/trending'>Trending</NavLink>
        </li>
        <li>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
