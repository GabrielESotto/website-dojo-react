import React from 'react'
import { 
  Nav, 
  NavLogo,
  NavRight,
  FaSearchs,
  NavLink,
  Bars
} from './NavbarElements'

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to='/'/>
      <NavRight>
        <NavLink to='/'>Login</NavLink>
        <FaSearchs />
        <Bars />
      </NavRight>
    </Nav>
  )
}

export default Navbar
