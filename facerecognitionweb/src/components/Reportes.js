import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap";
import './Reportes.css';

const Reportes = ({ isOpen, toggleSidebar }) => {

  // Simulamos datos de reportes
  const reportes = [
    { id: 1, empleado: 'John', fecha: '2023-01-01', hora: '08:00', ubicacion: 'Oficina' },
    { id: 2, empleado: 'Jane Smith', fecha: '2023-01-01', hora: '08:05', ubicacion: 'Remoto' },
    { id: 3, empleado: 'Michael Johnson', fecha: '2023-01-01', hora: '08:10', ubicacion: 'Oficina' },
    { id: 4, empleado: 'Emma Brown', fecha: '2023-01-01', hora: '08:15', ubicacion: 'Oficina' },
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
      <h1 className="dashboard-title mb-4">Reporte43434s</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-sm custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Empleado</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((reporte) => (
              <tr key={reporte.id}>
                <td>{reporte.id}</td>
                <td>{reporte.empleado}</td>
                <td>{reporte.fecha}</td>
                <td>{reporte.hora}</td>
                <td>{reporte.ubicacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Reportes;
