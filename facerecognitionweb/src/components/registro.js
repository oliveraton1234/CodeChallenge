// src/components/Registro.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Registro.css'; // Importa los estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos de registro
    console.log(formData);
  };

  return (
    <div className="registro-container">
      <div className="registro-content">
        <div className="registro-form">
          <h2>Registrarse</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  name="contraseña"
                  value={formData.contraseña}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Registrarse
            </Button>

            <div className="text-center mt-3">
              <Link to="/login" className="btn-link">¿Ya tienes una cuenta? Inicia sesión</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
