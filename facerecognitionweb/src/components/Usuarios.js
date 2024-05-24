import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faBars } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap";
import './Usuarios.css';

const Usuarios = ({ isOpen, toggleSidebar }) => {

  // Simulamos datos de usuarios
  const usuarios = [
    { id: 1, nombre: 'John', apellidoPaterno: 'Doe', apellidoMaterno: 'Smith', cargo: 'Administrador', telefono: '123-456-7890', email: 'john.doe@example.com', direccion: '123 Main St' },
    { id: 2, nombre: 'Jane', apellidoPaterno: 'Smith', apellidoMaterno: 'Johnson', cargo: 'Usuario', telefono: '098-765-4321', email: 'jane.smith@example.com', direccion: '456 Elm St' },
    { id: 3, nombre: 'Michael', apellidoPaterno: 'Johnson', apellidoMaterno: 'Williams', cargo: 'Usuario', telefono: '567-890-1234', email: 'michael.johnson@example.com', direccion: '789 Oak St' },
    { id: 4, nombre: 'Emma', apellidoPaterno: 'Brown', apellidoMaterno: 'Jones', cargo: 'Moderador', telefono: '234-567-8901', email: 'emma.brown@example.com', direccion: '321 Pine St' },
    { id: 5, nombre: 'James', apellidoPaterno: 'Wilson', apellidoMaterno: 'Davis', cargo: 'Usuario', telefono: '345-678-9012', email: 'james.wilson@example.com', direccion: '654 Maple St' },
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
      <h1 className="dashboard-title mb-4">Usuarios</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-sm custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellidoPaterno}</td>
                <td>{usuario.apellidoMaterno}</td>
                <td>{usuario.cargo}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.email}</td>
                <td>{usuario.direccion}</td>
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
