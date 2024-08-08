import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/products">
          <img src={logo} alt="Paradise Nursery Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




