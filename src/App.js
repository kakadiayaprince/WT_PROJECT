// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componant/Navbar'; // Adjust the path as necessary
import Cart from './Componant/Cart'; // Adjust the path as necessary
import ProductList from './Componant/ProductList'; // Adjust the path as necessary
import CartProvider from './Componant/CartContext'; // Adjust the path as necessary
import Main from './Componant/Main'; // Assuming this is a separate component
import Login from './Componant/Login'; // Adjust the path as necessary
import SearchResults from './Componant/SearchResults'
import BuyingPage from './Componant/BuyingPage';
import BillingPage from './Componant/BillingPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    { id: 1, title: 'Smartphone', price: '₹26699', img: 'https://th.bing.com/th/id/OIP.1b-9nBUOcXQ1zyJC7QgcSAHaFe?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, title: 'Laptop', price: '₹69999', img: 'https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?w=240&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, title: 'Sneakers', price: '₹1989', img: 'https://th.bing.com/th/id/OIP.BTPibK4Zbnt8ZBPunu62TgHaEp?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, title: 'Coffee Maker', price: '₹1529', img: 'https://th.bing.com/th/id/OIP.v7ORILVh4Fl0C88CzQDN9QHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Tablet', price: '₹67499', img: 'https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 6, title: 'Camera', price: '₹299599', img: 'https://th.bing.com/th/id/OIP.7O4D1qU5tksydRyuHadIfwAAAA?w=191&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 7, title: 'Wireless Earbuds', price: '₹1599', img: 'https://th.bing.com/th/id/OIP.GYFRWmPUwj4YYiPZYVSTwQHaG8?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, title: 'Smartwatch', price: '₹19090', img: 'https://th.bing.com/th/id/OIP.qSMaO-AvgfQnnzjEBLpSDAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 9, title: 'Gaming Console', price: '₹20099', img: 'https://th.bing.com/th/id/OIP.5UvQYVpaJN99sClhkIqUZQAAAA?w=290&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 10, title: 'Bluetooth Speaker', price: '₹15259', img: 'https://th.bing.com/th/id/OIP.5dmpGAKZ-stTeXpXPpxU5AHaE6?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
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
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/buy/:productId" element={<BuyingPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
