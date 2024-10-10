import React, { useContext, useState } from 'react';
import { CartContext } from '../Componant/CartContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import './BuyingPage.css'; 

const BuyingPage = () => {
  const { products, addToCart } = useContext(CartContext); 
  const { productId } = useParams(); 
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(productId)); 
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity); // Added quantity to the cart
    setShowAlert(true);
    navigate('/billing');
    setTimeout(() => setShowAlert(false), 3000); 
  };

  if (!product) return <div>Product not found</div>;

  return (
    <Container className="buying-page mt-5">
      {showAlert && <Alert variant="success">Product added to cart!</Alert>}
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Img 
              variant="top" 
              src={product.img} 
              alt={product.title} 
              className="product-image-large"
            />
          </Card>
        </Col>
        <Col md={6}>
          <div className="product-details">
            <h2 className="product-title text-center">{product.title}</h2>
            <h4 className="product-price text-center text-success">
              {product.price}
            </h4>
            <p className="text-muted text-center">Inclusive of all taxes</p>
            <Form.Group controlId="quantity" className="mb-4 text-center">
              <Form.Label className="font-weight-bold">Select Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="text-center quantity-input"
              />
            </Form.Group>

            <div className="action-buttons text-center">
              <Button 
                variant="primary" 
                className="btn-lg mb-3 w-100" 
                onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button 
                variant="primary" 
                className="btn-lg w-100" 
                onClick={() => addToCart(product, quantity)}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyingPage;
