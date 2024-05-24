// src/components/Inicio.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheckCircle, faChartBar } from '@fortawesome/free-solid-svg-icons';
import facial from '../images/facial.jpg'; // Importa la imagen
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Bienvenido a Nuestro Sistema de Registro Facial</h1>
              <p>Utiliza la inteligencia artificial para gestionar el registro y la actividad de los empleados de manera eficiente y segura.</p>
              <Button variant="primary" href="/registro">Comenzar</Button>
            </Col>
            <Col md={6} className="d-none d-md-flex justify-content-center"> {/* Oculta la imagen en pantallas pequeñas y centra la imagen */}
              <img src={facial} alt="Registro Facial" className="img-fluid enlarged-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="features-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="feature-box">
                <FontAwesomeIcon icon={faUserPlus} size="3x" className="mb-3" />
                <h3>Registro Fácil</h3>
                <p>Registra los datos de tus empleados de manera rápida y sencilla.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <FontAwesomeIcon icon={faCheckCircle} size="3x" className="mb-3" />
                <h3>Verificación Facial</h3>
                <p>Utiliza Amazon Rekognition para una verificación facial precisa y segura.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <FontAwesomeIcon icon={faChartBar} size="3x" className="mb-3" />
                <h3>Reportes Detallados</h3>
                <p>Genera reportes detallados sobre la actividad y el registro de tus empleados.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Inicio;
