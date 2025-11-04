
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        <h2>🛒 TechWorld</h2>
      </Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </div>
  );
}
export default Navbar;
