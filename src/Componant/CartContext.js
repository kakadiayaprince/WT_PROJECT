import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login
  const [products] = useState([
    { id: 1, title: 'Smartphone', price: 699, img: 'link_to_smartphone_image' },
    { id: 2, title: 'Laptop', price: 999, img: 'link_to_laptop_image' },
    { id: 3, title: 'Sneakers', price: 89, img: 'link_to_sneakers_image' },
    // Add more products as needed
  ]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Logout functionality
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Login functionality (for demonstration purposes)
    const login = async (username, password) => {
    // Simulate an API call
    if (username === 'prince' && password === '132') {
      setIsLoggedIn(true);
      return Promise.resolve(); // Resolve the promise on successful login
    } else {
      return Promise.reject(new Error('Invalid credentials')); // Reject the promise on failure
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      products, 
      isLoggedIn, 
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
