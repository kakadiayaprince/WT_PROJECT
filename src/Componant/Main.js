import React, { useContext } from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './Main.css';

const Main = () => {
  const { addToCart } = useContext(CartContext);

 
  const handleBuyNow = (product) => {
    console.log("Adding to cart:", product); // Debug log
    
    addToCart(product); 
    alert(`${product.title} added to cart!`); 
  };
  const products = [
    { id: 1, title: 'Smartphone', price: '₹699', img: 'https://via.placeholder.com/300?text=Smartphone' },
    { id: 2, title: 'Laptop', price: '₹999', img: 'https://via.placeholder.com/300?text=Laptop' },
    { id: 3, title: 'Sneakers', price: '₹89', img: 'https://via.placeholder.com/300?text=Sneakers' },
    { id: 4, title: 'Coffee Maker', price: '₹49', img: 'https://via.placeholder.com/300?text=Coffee+Maker' },
    { id: 5, title: 'Tablet', price: '₹499', img: 'https://via.placeholder.com/300?text=Tablet' },
    { id: 6, title: 'Camera', price: '₹799', img: 'https://via.placeholder.com/300?text=Camera' },
    // Add more products as necessary
  ];
  
  

  return (
    <div>
      {/* Carousel */}
      <Carousel>
        {/* ... */}
      </Carousel>

      {/* Categories */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="success" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
