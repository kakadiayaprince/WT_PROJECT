import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProductDetail.css'; // Import custom styles

const products = [
  { id: 1, title: 'Product 1', price: 100, description: 'This is Product 1', img: 'https://example.com/product1.jpg' },
  { id: 2, title: 'Product 2', price: 150, description: 'This is Product 2', img: 'https://example.com/product2.jpg' },
  { id: 3, title: 'Product 3', price: 200, description: 'This is Product 3', img: 'https://example.com/product3.jpg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Find the product by ID, convert id to number
  const product = products.find((p) => p.id === parseInt(id));

  // Handle product not found
  if (!product) {
    return (
      <Container className="text-center mt-5">
        <h2>Product not found</h2>
        <Button variant="primary" onClick={() => navigate('/main')}>Go Back to Products</Button>
      </Container>
    );
  }

  // Format price to include ₹ symbol and commas for better readability
  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <Container className="product-detail-container mt-5">
      <Row>
        <Col md={6} className="text-center">
          <img src={product.img} alt={product.title} className="img-fluid product-img" />
        </Col>
        <Col md={6}>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">Price: {formatPrice(product.price)}</h3>
          <Button variant="success" className="mt-3" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
