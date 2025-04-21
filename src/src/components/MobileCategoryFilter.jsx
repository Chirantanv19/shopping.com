// src/components/MobileCategoryFilter.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MobileCategoryFilter = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  
  const categories = [
    { id: 'all', name: 'All Products', path: '/shop' },
    { id: 'tshirts', name: 'T-Shirts', path: '/shop/tshirts' },
    { id: 'shirts', name: 'Shirts', path: '/shop/shirts' },
    { id: 'lowers', name: 'Lowers', path: '/shop/lowers' },
    { id: 'shoes', name: 'Shoes', path: '/shop/shoes' }
  ];
  
  const handleCategoryClick = (path) => {
    navigate(path);
  };
  
  return (
    <div className="mobile-category-filter">
      {categories.map((cat) => (
        <button 
          key={cat.id}
          className={`category-btn ${(!category && cat.id === 'all') || category === cat.id ? 'active' : ''}`}
          onClick={() => handleCategoryClick(cat.path)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default MobileCategoryFilter;

