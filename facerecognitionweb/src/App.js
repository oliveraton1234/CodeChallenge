import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Registro from './components/Registro';
import Contacto from './components/Contacto';
import Dashboard from './components/Dashboard';
import AdminSidebar from './components/AdminSidebar';
import Usuarios from './components/Usuarios'; // Importamos el componente Usuarios

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Nav />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/dashboard/*"
              element={
                <div className="d-flex">
                  <AdminSidebar isOpen={isSidebarOpen} />
                  <Dashboard isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>
              }
            />
            <Route path="/usuarios" element={<Usuarios />} /> {/* Ruta para Usuarios */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
