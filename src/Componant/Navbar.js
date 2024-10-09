
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Componant/CartContext';
import { Form, InputGroup } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, isLoggedIn, logout } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`); 
    }
  };

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
    
        <Link className="navbar-brand"  to="/main">
        <i className="bi bi-shop" style={{ fontSize: '50px' , color:'#f0a500' }} ></i>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/main">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"> CART ({cartItems.length})
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center flex-grow-1 mx-3">
            <form onSubmit={handleSearchSubmit}>
              <InputGroup style={{ maxWidth: '350px' }}>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </InputGroup>
            </form>
          </div>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">LOGIN</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
