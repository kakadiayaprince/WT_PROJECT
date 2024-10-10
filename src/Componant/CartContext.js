import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const products = [
    { id: 1, title: 'Smartphone', price: '₹26,699', img: 'https://th.bing.com/th/id/OIP.1b-9nBUOcXQ1zyJC7QgcSAHaFe?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, title: 'Laptop', price: '₹69,999', img: 'https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?w=240&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, title: 'Sneakers', price: '₹1,989', img: 'https://th.bing.com/th/id/OIP.BTPibK4Zbnt8ZBPunu62TgHaEp?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, title: 'Coffee Maker', price: '₹1,529', img: 'https://th.bing.com/th/id/OIP.v7ORILVh4Fl0C88CzQDN9QHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Tablet', price: '₹67,499', img: 'https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 6, title: 'Camera', price: '₹2,99,599', img: 'https://th.bing.com/th/id/OIP.7O4D1qU5tksydRyuHadIfwAAAA?w=191&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 7, title: 'Wireless Earbuds', price: '₹1,599', img: 'https://th.bing.com/th/id/OIP.GYFRWmPUwj4YYiPZYVSTwQHaG8?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, title: 'Smartwatch', price: '₹19,090', img: 'https://th.bing.com/th/id/OIP.qSMaO-AvgfQnnzjEBLpSDAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 9, title: 'Gaming Console', price: '₹20,099', img: 'https://th.bing.com/th/id/OIP.5UvQYVpaJN99sClhkIqUZQAAAA?w=290&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 10, title: 'Bluetooth Speaker', price: '₹15,259', img: 'https://th.bing.com/th/id/OIP.5dmpGAKZ-stTeXpXPpxU5AHaE6?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  ];

  // Calculate total price with appropriate handling of '₹' and commas
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = typeof item.price === 'string'
      ? parseFloat(item.price.replace('₹', '').replace(/,/g, ''))  // Remove '₹' and commas
      : item.price;
    return total + (itemPrice * (item.quantity || 1));
  }, 0);

  // Add product to the cart
  const addToCart = (product, quantity = 1) => {
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
    if (itemIndex > -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Log the user out
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Mock login function
  const login = async (username, password) => {
    if (username === 'prince' && password === '132') {
      setIsLoggedIn(true);
      return Promise.resolve(); 
    } else {
      return Promise.reject(new Error('Invalid credentials'));
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      products, 
      isLoggedIn, 
      totalPrice,
      addToCart, 
      removeFromCart, 
      clearCart, 
      logout, 
      login 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
