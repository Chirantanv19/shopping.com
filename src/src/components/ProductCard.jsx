import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useProducts();
  const discount = Math.round(((product.price - product.discountPrice) / product.price) * 100);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="discount-badge">{discount}% OFF</span>
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-price">
          <span className="current-price">Rs {product.discountPrice.toFixed(2)}</span>
          <span className="original-price">Rs {product.price.toFixed(2)}</span>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
