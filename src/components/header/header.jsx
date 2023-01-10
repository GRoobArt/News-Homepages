import { NavLink } from 'react-router-dom'
import NavMenu from './nav/nav'

const HeaderMenu = () => {
  return (
    <header className='header-page'>
      <div className='logo-header'>
        <NavLink to='/'>
          <img src='../../../logo.svg' alt='New Homepage' />
        </NavLink>
      </div>
      <NavMenu />
    </header>
  )
}

export default HeaderMenu
