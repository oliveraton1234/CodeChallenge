import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"; // Archivo de estilos para el dashboard

const Dashboard = ({ isOpen, toggleSidebar }) => {
  return (
    <Container fluid className={`dashboard-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h1 className="dashboard-title mb-4"></h1>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Usuarios</Card.Title>
              <Card.Text>Gestiona los usuarios de la aplicación.</Card.Text>
              <Button variant="primary">Ver usuarios</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={12} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Reportes</Card.Title>
              <Card.Text>Genera reportes y estadísticas.</Card.Text>
              <Button variant="primary">Generar reportes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

/* src/components/Dashboard.css */
