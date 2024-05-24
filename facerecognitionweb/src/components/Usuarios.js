import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap";


import './Usuarios.css';


const Usuarios = ({ isOpen, toggleSidebar }) => {

  // Simulamos datos de usuarios
  const usuarios = [
    { id: 1, nombre: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, nombre: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, nombre: 'Michael Johnson', email: 'michael.johnson@example.com' },
    { id: 4, nombre: 'Emma Brown', email: 'emma.brown@example.com' },
    { id: 5, nombre: 'James Wilson', email: 'james.wilson@example.com' },
  ];

  useEffect(() => {
    // Ajustar el ancho de las columnas al contenido
    const table = document.querySelector('.custom-table');
    if (table) {
      const ths = table.querySelectorAll('thead th');
      ths.forEach((th) => {
        const maxWidth = Array.from(table.querySelectorAll(`td:nth-child(${th.cellIndex + 1})`))
          .map(td => td.textContent.length * 10) // Puedes ajustar este valor según tus necesidades
          .reduce((a, b) => Math.max(a, b), 0);
        th.style.width = `${maxWidth}px`;
      });
    }
  }, []);

  return (
    <Container fluid className={`dashboard-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-sm custom-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary btn-sm mr-1" title="Editar">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" title="Eliminar">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
  );
};

export default Usuarios;
