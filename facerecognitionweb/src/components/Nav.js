// src/components/Nav.js
import React from "react";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Nav = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          KARIMNOT{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <BootstrapNav className="ml-auto">
            {/* Mostrar estos enlaces cuando la ubicación sea / */}
            {location.pathname === "/" && (
              <>
                <BootstrapNav.Link as={Link} to="/inicio">
                  Inicio
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/contacto">
                  Contacto
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/login">
                  Iniciar Sesión
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/registro">
                  Registrarse
                </BootstrapNav.Link>
              </>
            )}
            {/* Mostrar estos enlaces cuando la ubicación sea /inicio */}
            {location.pathname === "/inicio" && (
              <>
                <BootstrapNav.Link as={Link} to="/inicio">
                  Inicio
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/contacto">
                  Contacto
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/login">
                  Iniciar Sesión
                </BootstrapNav.Link>
              </>
            )}
            {/* Mostrar estos enlaces cuando la ubicación sea /login */}
            {location.pathname === "/login" && (
              <>
                <BootstrapNav.Link as={Link} to="/inicio">
                  Inicio
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/contacto">
                  Contacto
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/registro">
                  Registrarse
                </BootstrapNav.Link>
              </>
            )}
            {/* Mostrar estos enlaces cuando la ubicación sea /registro */}
            {location.pathname === "/registro" && (
              <>
                <BootstrapNav.Link as={Link} to="/inicio">
                  Inicio
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/contacto">
                  Contacto
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/login">
                  Iniciar Sesión
                </BootstrapNav.Link> 
              </>
            )}
            {/* Mostrar estos enlaces cuando la ubicación sea /contacto */}
            {location.pathname === "/contacto" && (
              <>
                <BootstrapNav.Link as={Link} to="/inicio">
                  Inicio
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/contacto">
                  Contacto
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="/login">
                  Iniciar Sesión
                </BootstrapNav.Link>
              </>
            )}
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
