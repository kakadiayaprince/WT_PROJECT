// src/Componant/ProductList.js
import React, { useContext } from 'react'; // Added useContext import
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; // Ensure the import path is correct
import './ProductList.css'; // Ensure you have appropriate styling

const ProductList = ({ products, searchQuery }) => {
  const { addToCart } = useContext(CartContext); // Use the CartContext

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h2>Featured Products</h2>
      <Row>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id}>
              <div className="product-item">
                <img src={product.img} alt={product.title} />
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <Button variant="primary" onClick={() => addToCart(product)}>Buy Now</Button>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
