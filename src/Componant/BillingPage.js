import React, { useContext, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { CartContext } from '../Componant/CartContext';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './BillingPage.css'; 

const BillingPage = () => {
  // const location = useLocation(); 
  const { cartItems, totalPrice } = useContext(CartContext);  // Fetch cart items and total price from context
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card' 
  });

  // Handle changes in billing form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  // Place order action (you can enhance this to submit the data to the backend)
  const handlePlaceOrder = () => {
    if (billingDetails.name && billingDetails.address) {
      alert('Order placed successfully!');
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <Container className="billing-page mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4 billing-card">
            <h4 className="text-center mb-4">Billing Information</h4>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="address" className="mt-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter your address"
                  required
                />
              </Form.Group>
              <Form.Group controlId="paymentMethod" className="mt-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  name="paymentMethod"
                  value={billingDetails.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="upi">UPI</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="debit-card">Debit Card</option>
                  <option value="paypal">PayPal</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-lg p-4 order-summary-card">
            <h4 className="text-center mb-4">Order Summary</h4>
            {cartItems.length > 0 ? (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <strong>{item.title}</strong> - {item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p> 
              </>
            ) : (
              <p>No items in the cart.</p>
            )}
            <Button
              variant="primary"
              onClick={handlePlaceOrder}
              className="w-100 mt-3"
            >
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BillingPage;
