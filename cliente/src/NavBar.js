import React from 'react';
import { Link } from 'react-router-dom';
import logo from './graduado.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <strong><Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="mr-2" style={{ width: '40px', height: '40px' }} />
            Inicio
        </Link></strong>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <strong><Link className="nav-link" to="/crear">Agregar Tarea</Link></strong>
                </li>
                <li className="nav-item">
                    <strong><Link className="nav-link" to="/calendario">Calendario</Link></strong>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
