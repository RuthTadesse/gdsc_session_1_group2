import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <NavLink to="/" exact activeClassName="active">Home</NavLink>
    <NavLink to="/cart" activeClassName="active">Cart</NavLink>
  </nav>
);

export default NavBar;