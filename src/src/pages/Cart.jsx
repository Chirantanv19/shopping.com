// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import Navbar from '../components/Navbar';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useProducts();
  
  const totalPrice = cart.reduce(
    (total, item) => total + (item.discountPrice * item.quantity), 
    0
  );

  return (
    <div className="shop-container">
      <Navbar />
      
      <main className="cart-content">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">Rs {item.discountPrice.toFixed(2)} × {item.quantity}</p>
                  </div>
                  
                  <div className="item-actions">
                    <p className="item-subtotal">
                      ${(item.discountPrice * item.quantity).toFixed(2)}
                    </p>
                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;