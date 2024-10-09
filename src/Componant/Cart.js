import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = typeof item.price === 'string'
      ? parseFloat(item.price.replace('₹', '').replace(',', ''))
      : item.price;
    return total + (itemPrice * (item.quantity || 1));
  }, 0);

 
  const handleBuyNow = (item) => {
    navigate(`/buy/${item.id}`);
  };

  return (
    <Container className="cart-container mt-5">
      <h2 className="cart-title">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">
          Your cart is empty. <a href="/main">Continue Shopping</a>
        </p>
      ) : (
        <div className="cart-items-section">
          {cartItems.map((item, index) => (
            <Row key={index} className="cart-item-row">
              <Col md={2} className="cart-item-image">
                <img src={item.img} alt={item.title} />
              </Col>
              <Col md={7} className="cart-item-details">
                <h5>{item.title}</h5>
                <p className="cart-item-price">₹{item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity || 1}</p>
              </Col>
              <Col md={3} className="cart-item-actions">
                <Button
                  size="sm"
                  onClick={() => removeFromCart(item)}
                  variant="danger"
                  className="remove-btn"
                >
                  Remove
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleBuyNow(item)}
                  variant="primary"
                  className="buy-now-btn mt-2"
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          ))}
          <div className="cart-total-section mt-4">
            <h4>Subtotal ({cartItems.length} items): ₹{totalPrice.toFixed(2)}</h4>
            <Button
              variant="success"
              className="checkout-btn"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <Button
              variant="primary"
              className="proceed-btn ml-3"
              onClick={() => navigate('/billing')}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
