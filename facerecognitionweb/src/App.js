import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./pages/Nav";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import Dashboard from "./components/Dashboard";
import AdminSidebar from "./components/AdminSidebar";
import Usuarios from "./pages/Usuarios";
import Reportes from "./pages/Reportes";

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAdminUsuarios = location.pathname === "/admin/usuarios";
  const isAdminReportes = location.pathname === "/admin/reportes";

  const hideNavAndFooter = isDashboard || isAdminUsuarios || isAdminReportes;

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
                <Dashboard
                  isOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
              </div>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <div className="d-flex">
                <AdminSidebar isOpen={isSidebarOpen} />
                <Usuarios
                  isOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
              </div>
            }
          />
          <Route
            path="/admin/reportes"
            element={
              <div className="d-flex">
                <AdminSidebar isOpen={isSidebarOpen} />
                <Reportes
                  isOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
              </div>
            }
          />
          
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
