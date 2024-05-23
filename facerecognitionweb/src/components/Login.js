// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Login.css'; // Importa los estilos CSS
import login from '../images/login.jpg'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2>Iniciar sesión</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="password-container">
              <Form.Label>Contraseña</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Ingresar
            </Button>

            <div className="text-center mt-3">
              <Link to="/forgot-password" className="btn-link">¿Olvidaste tu contraseña?</Link>
            </div>
          </Form>
        </div>
        <div className="login-image">
          <img src={login} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
