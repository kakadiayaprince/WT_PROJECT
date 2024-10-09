
import React, { useContext } from 'react'; 
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import './ProductList.css'; 

const ProductList = ({ products, searchQuery, loading }) => {
  const { addToCart } = useContext(CartContext);

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h2 className="text-center my-4">Featured Products</h2>
      
      {loading ? ( 
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No products found matching your search criteria.
        </Alert>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <div className="product-item shadow-sm p-3 mb-5 bg-white rounded">
                <img src={product.img} alt={product.title} className="img-fluid" />
                <h5 className="mt-3">{product.title}</h5>
                <p className="product-price">{formatPrice(product.price)}</p>
                <Button 
                  variant="primary" 
                  onClick={() => addToCart(product)} 
                  className="w-100"
                >
                  Add to Cart
                </Button>
              </div>
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

export default ProductList;
