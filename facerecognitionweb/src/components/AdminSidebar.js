import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faCog, faSignOutAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <Nav className="flex-column h-100">
        <div className="flex-grow-1">
          <Nav.Item>
            <Nav.Link as={Link} to="/usuarios">
              <FontAwesomeIcon icon={faUser} className="me-2" /> Usuarios
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            
            <Nav.Link as={Link} to="/admin/usuarios">
              <FontAwesomeIcon icon={faUser} className="me-2" /> Usuarios
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/reportes">
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Reportes
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/configuracion">
              <FontAwesomeIcon icon={faCog} className="me-2" /> Configuración
            </Nav.Link>
          </Nav.Item>
        </div>
        <Nav.Item>
          <Nav.Link as={Link} to="/inicio">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Cerrar Sesión
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
