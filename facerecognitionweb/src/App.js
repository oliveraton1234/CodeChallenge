import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isDashboard = location.pathname.startsWith('/dashboard');
  const isAdminUsuarios = location.pathname === '/admin/usuarios'; // Verifica si la ruta es /admin/usuarios

  const hideNavAndFooter = isDashboard || isAdminUsuarios; 

  return (
    <div className="d-flex flex-column min-vh-100">
      {!hideNavAndFooter && <Nav />}
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
          <Route path="/admin/usuarios" element={<Usuarios />} /> {/* Ruta para Usuarios */}
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
