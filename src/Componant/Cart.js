import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {

    if (typeof item.price === 'string') {
      return total + parseFloat(item.price.replace('₹', '').replace(',', '')); // Remove '₹' and parse
    } else if (typeof item.price === 'number') {
      return total + item.price;
    }
    return total;
  }, 0);

  return (
    <Container className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <a href="/main">Continue Shopping</a></p>
      ) : (
        <div>
          <Row>
            {cartItems.map((item, index) => (
              <Col md={12} key={index}>
                <div className="cart-item">
                  <img src={item.img} alt={item.title} />
                  <div className="cart-item-details">
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                  </div>
                  <Button variant="danger" onClick={() => removeFromCart(item)}>Remove</Button>
                </div>
              </Col>
            ))}
          </Row>
          <div className="cart-total">
            Total Price: ₹{totalPrice.toFixed(2)} 
          </div>
          <Button variant="primary" onClick={clearCart}>Clear Cart</Button>
          <Button variant="primary" onClick={BuyNow}>Buy Now</Button>
        </div>
      )}
    </Container>
  );
};

export default Cart;
