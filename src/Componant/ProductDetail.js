// src/components/ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const products = [
  { id: 1, title: 'Product 1', price: 100, description: 'This is Product 1' },
  { id: 2, title: 'Product 2', price: 150, description: 'This is Product 2' },
  { id: 3, title: 'Product 3', price: 200, description: 'This is Product 3' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
