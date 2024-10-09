// src/components/Login.js
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Spinner } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const { login, isLoggedIn } = useContext(CartContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    if (isLoggedIn) {
      navigate('/main'); // Redirect to main page if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    login(username, password) // Assuming login returns a Promise
      .then(() => {
        alert('Logged in successfully');
        navigate('/main'); // Redirect to main page after successful login
      })
      .catch((error) => {
        setErrorMessage(error.message || 'Login failed. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card className="login-card shadow" style={{ width: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                <FaUser /> Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <FaLock /> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              onClick={handleLogin} 
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                'Login'
              )}
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
