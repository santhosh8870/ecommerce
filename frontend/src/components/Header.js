import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = ({ cartItems }) => {
  const loggedIn = localStorage.getItem("auth");

  const handleLogout = () => {
      localStorage.removeItem("auth");
      window.location.href = "/login";
  }


  return (
    <nav className="navbar-container">

      {/* Left - Logo */}
      <div className="nav-left">
        <img width="70px" src="/images/logo.png" alt="logo" />
      </div>

      {/* Center - Search */}
      <div className="nav-center">
        <Search />
      </div>

      {/* Right - Cart */}
      <div className="nav-right">
        <Link to="/cart">
          <span id="cart">Cart</span>
        </Link>
        <span id="cart_count">{cartItems.length}</span>
        {loggedIn && (
          <Link to="/profile">
            <button className="login-btn">Profile</button>
          </Link>
        )}
        {loggedIn ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}


      </div>

    </nav>
  );
};

export default Header;
