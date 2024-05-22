import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar py-4 bg-black text-gold">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-grow justify-end space-x-8">
          <Link to="/">Inicio</Link>
          <Link to="/about-us">Presentación</Link>
          <Link to="/services">Servicios</Link>
        </div>
        <div className="flex-shrink-0 mx-4">
          <img src="/assets/img/logo.png" alt="Logo" className="h-16" />
        </div>
        <div className="flex flex-grow justify-start space-x-8">
          <Link to="/gallery">Galería</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/courses">Cursos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
