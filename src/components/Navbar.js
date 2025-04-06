import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">FE</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#info">Informações Importantes</a></li>
        <li><a href="#programacao">Programação</a></li>
        <li>
          <a href="#confirmacao" className="confirm-button">
            Confirmação de Presença
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
