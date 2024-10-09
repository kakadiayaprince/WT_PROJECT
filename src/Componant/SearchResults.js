// src/components/SearchResults.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Componant/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './SearchResults.css'; // Optional styling file

const SearchResults = () => {
  const { products } = useContext(CartContext); // Assuming you have products in context
  const query = new URLSearchParams(useLocation().search).get('q');

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <h2>Search Results for: <strong>{query}</strong></h2>
      {filteredProducts.length === 0 ? (
        <p>No results found for your search.</p>
      ) : (
        <Row>
          {filteredProducts.map((product, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.img} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Price: ₹{product.price}
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResults;
