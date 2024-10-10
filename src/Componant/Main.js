import React, { useContext } from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Navigate to the billing page when 'Buy Now' is clicked
  const handleBuyNow = (product) => {
    navigate('/billing', { state: { product } });
  };

  // Add product to cart and notify the user
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
    navigate('/cart');
  };
  

  const mainproducts = [
    { id: 11, title: 'Smartphones', price: '₹20,000-1,50,000', img: 'https://th.bing.com/th/id/OIP.Apgj1nJ0mnUhtLa64r1T-AHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 12, title: 'Laptops', price: '₹40,999-3,50,000', img: 'https://th.bing.com/th/id/OIP.ADdf6xMng_XUrvTRIlKP6gAAAA?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 13, title: 'Sneakers', price: '₹1,000-7,000', img: 'https://th.bing.com/th/id/OIP.z6OWKNc85Fg2ZktXxrCuaQHaJM?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    
  ];

  const products = [
    { id: 1, title: 'Smartphone', price: '₹26,699', img: 'https://th.bing.com/th/id/OIP.1b-9nBUOcXQ1zyJC7QgcSAHaFe?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, title: 'Laptop', price: '₹69,999', img: 'https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?w=240&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, title: 'Sneaker', price: '₹1,989', img: 'https://th.bing.com/th/id/OIP.BTPibK4Zbnt8ZBPunu62TgHaEp?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, title: 'Coffee Maker', price: '₹1,529', img: 'https://th.bing.com/th/id/OIP.v7ORILVh4Fl0C88CzQDN9QHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Tablet', price: '₹67,499', img: 'https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 6, title: 'Camera', price: '₹2,99,599', img: 'https://th.bing.com/th/id/OIP.7O4D1qU5tksydRyuHadIfwAAAA?w=191&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 7, title: 'Wireless Earbuds', price: '₹1,599', img: 'https://th.bing.com/th/id/OIP.GYFRWmPUwj4YYiPZYVSTwQHaG8?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, title: 'Smartwatch', price: '₹19,090', img: 'https://th.bing.com/th/id/OIP.qSMaO-AvgfQnnzjEBLpSDAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 9, title: 'Gaming Console', price: '₹20,099', img: 'https://th.bing.com/th/id/OIP.5UvQYVpaJN99sClhkIqUZQAAAA?w=290&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 10, title: 'Bluetooth Speaker', price: '₹15,259', img: 'https://th.bing.com/th/id/OIP.5dmpGAKZ-stTeXpXPpxU5AHaE6?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  ];

  return (
    <div className="main-page">
      <Carousel className="main-carousel">
        {mainproducts.slice(0, 3).map((mainproducts) => (
          <Carousel.Item key={mainproducts.id}>
            <div className="carousel-image-wrapper">
              <img className="d-block mx-auto" src={mainproducts.img} alt={mainproducts.title} />
            </div>
            <Carousel.Caption>
              <h3 style={{color : 'black'}}>{mainproducts.title}</h3>
              <p style={{color : 'black'}}>{mainproducts.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-4">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="product-card shadow-sm">
                <Card.Img variant="top" src={product.img} alt={product.title} className="product-image" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-muted">{product.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleBuyNow(product)}>
                      Buy Now
                    </Button>
                    <Button variant="secondary" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
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
