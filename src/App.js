// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componant/Navbar'; // Adjust the path as necessary
import Cart from './Componant/Cart'; // Adjust the path as necessary
import ProductList from './Componant/ProductList'; // Adjust the path as necessary
import CartProvider from './Componant/CartContext'; // Adjust the path as necessary
import Main from './Componant/Main'; // Assuming this is a separate component
import Login from './Componant/Login'; // Adjust the path as necessary

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample products, replace with actual products as needed
  const products = [
    { id: 1, title: 'Smartphone', price: '₹699', img: 'https://via.placeholder.com/300?text=Smartphone' },
    { id: 2, title: 'Laptop', price: '₹999', img: 'https://via.placeholder.com/300?text=Laptop' },
    { id: 3, title: 'Sneakers', price: '₹89', img: 'https://via.placeholder.com/300?text=Sneakers' },
    { id: 4, title: 'Coffee Maker', price: '₹49', img: 'https://via.placeholder.com/300?text=Coffee+Maker' },
    { id: 5, title: 'Tablet', price: '₹499', img: 'https://via.placeholder.com/300?text=Tablet' },
    { id: 6, title: 'Camera', price: '₹799', img: 'https://via.placeholder.com/300?text=Camera' },
    // Add more products as necessary
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<ProductList products={products} searchQuery={searchQuery} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
