import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assests/logo.png'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src= {Logo} alt="Little Lemon Logo" />
        </Link>
      </div>
      <button className= "hamburger" onClick={toggleNav}>
        ☰
      </button>
      <div className={`navbar-right ${isNavOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </div>
      
      
    </nav>
  );
};

export default Navbar;