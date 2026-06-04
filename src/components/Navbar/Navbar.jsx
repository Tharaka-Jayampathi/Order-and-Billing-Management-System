import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Order & Billing System</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
