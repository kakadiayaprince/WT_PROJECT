// src/components/BuyingPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../Componant/CartContext';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './BuyingPage.css'; // Optional: import custom styles

const BuyingPage = () => {
  const { products } = useContext(CartContext); // Assuming you have a products array in context
  const { productId } = useParams(); // Get the product ID from the URL
  const product = products.find((item) => item.id === parseInt(productId)); // Find the product by ID

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyNow = () => {
    // Logic to add the product to cart (update context or state)
    alert(`Added ${quantity} ${product.title}(s) to cart!`);
  };

  if (!product) return <div>Product not found</div>; // Handle case where product is not found

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.img} alt={product.title} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="text-center">{product.title}</Card.Title>
            <Card.Text className="text-center">
              Price: ₹{product.price}
            </Card.Text>
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label>Select Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </Form.Group>
            <Button variant="primary" className="w-100" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyingPage;
