import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
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
    if (isLoggedIn) {
      navigate('/main'); 
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Both username and password are required.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    login(username, password)
      .then(() => {
        alert('Logged in successfully');
        navigate('/main');
      })
      .catch((error) => {
        setErrorMessage(error.message || 'Login failed. Please check your credentials and try again.');
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

          {errorMessage && (
            <Alert variant="danger" className="text-center">
              {errorMessage}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                <FaUser className="me-2" /> Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <FaLock className="me-2" /> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleLogin}
              className="w-100"
              disabled={loading}
              aria-live="polite"
              aria-busy={loading}
            >
              {loading ? (
                <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
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
