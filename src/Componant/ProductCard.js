import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product, addToCart }) => {

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    return `₹${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`; 
  };

  return (
    <div className="card product-card shadow-sm mb-4">
      <div className="card-img-wrapper">
        <img
          src={product.img}
          className="card-img-top img-fluid"
          alt={`Image of ${product.title}`}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{formatPrice(product.price)}</p>
        <button
          className="btn btn-primary mt-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
