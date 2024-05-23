// src/components/Contacto.js
import React, { useRef, useEffect } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import './Contacto.css'; // Importa los estilos CSS
import { loadGoogleMapsScript } from './googleMaps';

const Contacto = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMapsScript(initMap);
  }, []);

  const initMap = () => {
    // Verificar si google.maps está definido
    if (window.google && window.google.maps) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.712776, lng: -74.005974 }, // Nueva York como ejemplo inicial
        zoom: 15,
      });

      // Marcador en el mapa
      new window.google.maps.Marker({
        position: { lat: 40.712776, lng: -74.005974 },
        map,
        title: 'Mi ubicación',
      });
    } else {
      console.error('Error: Google Maps API no está cargada correctamente.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario de contacto
    console.log('Formulario enviado');
  };

  return (
    <Container className="contacto-container">
      <h2>Contacto</h2>
      <Row>
        <Col md={6}>
          <div className="contacto-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" required />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo electrónico" required />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escriba su mensaje aquí" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Enviar
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="contacto-info">
            <h4>Información de Contacto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum odio eu lorem
              dignissim, sed fermentum est vehicula.
            </p>
            <ul>
              <li><strong>Dirección:</strong> 123 Calle Principal, Ciudad, País</li>
              <li><strong>Teléfono:</strong> +123 456 7890</li>
              <li><strong>Correo Electrónico:</strong> info@example.com</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="map-container">
            <div ref={mapRef} className="map" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
