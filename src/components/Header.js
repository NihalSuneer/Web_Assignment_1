import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'white', fontWeight: 'bold' };

  return (
    <div className="header">
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/" exact="true" style={({ isActive }) => (isActive ? activeStyle : null)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" exact="true" style={({ isActive }) => (isActive ? activeStyle : null)}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/accountpage" exact="true" style={({ isActive }) => (isActive ? activeStyle : null)}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <NavLink to="/">Fitness</NavLink>
      </div>
    </div>
  );
};

export default Header;
