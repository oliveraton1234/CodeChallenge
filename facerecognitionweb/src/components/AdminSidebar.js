import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faCog, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <Nav className="flex-column mt-5"> {/* Ajuste del margen superior */}
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard">
            <FontAwesomeIcon icon={faChartBar} className="me-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/usuarios">
            <FontAwesomeIcon icon={faUser} className="me-2" /> Usuarios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/configuracion">
            <FontAwesomeIcon icon={faCog} className="me-2" /> Configuración
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-auto"> {/* Empuja el elemento al final */}
          <Nav.Link as={Link} to="/inicio">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Cerrar Sesión
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
