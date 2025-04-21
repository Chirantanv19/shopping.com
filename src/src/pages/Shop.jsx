import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const { category } = useParams();
  const { products, getProductsByCategory } = useProducts();
  
  const displayProducts = category ? getProductsByCategory(category) : products;
  
  const categoryTitles = {
    tshirts: 'T-Shirts Collection',
    shirts: 'Formal & Casual Shirts',
    lowers: 'Pants & Bottoms',
    shoes: 'Footwear Collection'
  };
  
  const title = category ? categoryTitles[category] : 'All Collections';

  return (
    <div className="shop-container">
      <Navbar />
      
      <main className="shop-content">
        <h1 className="shop-title">{title}</h1>
        
        {displayProducts.length === 0 ? (
          <p className="no-products">No products found in this category.</p>
        ) : (
          <div className="products-grid">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
