import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo ou texto à esquerda */}
      <div className="nav-logo">
        <span>F&E</span>
      </div>

      {/* Lista de links à direita */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#info">Informações Importantes</a></li>
        <li><a href="#programacao">Programação</a></li>
        
        {/* Botão de Confirmação de Presença */}
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
