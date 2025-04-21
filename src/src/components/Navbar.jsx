// Updated Navbar.jsx with mobile responsiveness
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { cart } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/shop">ShopStyle</Link>
      </div>
      
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
      
      <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/shop" 
            className={location.pathname === '/shop' ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            All Products
          </Link>
        </li>
        <li>
          <Link 
            to="/shop/tshirts" 
            className={location.pathname === '/shop/tshirts' ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            T-Shirts
          </Link>
        </li>
        <li>
          <Link 
            to="/shop/shirts" 
            className={location.pathname === '/shop/shirts' ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Shirts
          </Link>
        </li>
        <li>
          <Link 
            to="/shop/lowers" 
            className={location.pathname === '/shop/lowers' ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Lowers
          </Link>
        </li>
        <li>
          <Link 
            to="/shop/shoes" 
            className={location.pathname === '/shop/shoes' ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Shoes
          </Link>
        </li>
      </ul>
      
      <div className="navbar-right">
        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{cartItemCount}</span>
        </Link>
        
        {currentUser ? (
          <div className="user-menu">
            <span>Hello, {currentUser.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;