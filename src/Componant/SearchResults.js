
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Componant/CartContext';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import './SearchResults.css';

const SearchResults = ({ loading }) => {
  const { products, addToCart } = useContext(CartContext); 
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q'); 


  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <h2 className="text-center my-4">Search Results for: <strong>{query}</strong></h2>
      
      {loading ? ( 
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No results found for your search.
        </Alert>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={product.img} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Price: {formatPrice(product.price)}
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => addToCart(product)} 
                    className="w-100"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};


const formatPrice = (price) => {
  return `₹${parseFloat(price).toLocaleString()}`;
};

export default SearchResults;
