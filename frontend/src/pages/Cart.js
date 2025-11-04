
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-item-description">{item.description}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
            
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button 
                  className="btn btn-sm"
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="btn btn-sm"
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <div className="cart-item-total">
                <strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
              
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <h2>Cart Total: ${getCartTotal().toFixed(2)}</h2>
          <Link to="/checkout" className="btn btn-success btn-large">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
