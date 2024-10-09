// src/components/Home.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ProductList from './ProductList';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, title: 'Product 1', price: 100, img: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Product 2', price: 150, img: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Product 3', price: 200, img: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="container mt-4">
      <h2>Our Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
