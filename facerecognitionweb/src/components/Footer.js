import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row className="text-center text-md-left">
          <Col md="4" className="mb-4 mb-md-0">
            <h5>Ubicación</h5>
            <p>Alianza 205A interior 4 Jalatlaco, Oaxaca de Juárez, Oaxaca</p>
          </Col>
          <Col md="4" className="mb-4 mb-md-0">
            <h5>Contacto</h5>
            <p>
              <i className="fas fa-envelope mr-2"></i>Correo:{" "}
              <a
                href="mailto:info@example.com"
                className="footer-link text-white"
              >
                 admin@karimnot.com
              </a>{" "}
              <br />
              <i className="fas fa-phone mr-2"></i>Télefono: (951) 515-85-56
            </p>
          </Col>
          <Col md="4" className="mb-4 mb-md-0">
            <h5>Siguenos</h5>
            <p>
              <a href="#" className="footer-link text-white mr-3">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>{" "}
              <br />
              <a href="#" className="footer-link text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 ***** Derechos Reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;