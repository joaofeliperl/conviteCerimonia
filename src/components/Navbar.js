import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">F&amp;E</div>
      {/* Elemento da data: aparece apenas em telas pequenas */}
      <div className="nav-date">17.05.25</div>
      {/* Ícone de menu hamburguer - visível apenas em telas pequenas */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMobileMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#info" onClick={toggleMobileMenu}>
            Informações Importantes
          </a>
        </li>
        <li>
          <a href="#programacao" onClick={toggleMobileMenu}>
            Programação
          </a>
        </li>
        <li>
          <a
            href="#confirmacao"
            className="confirm-button"
            onClick={toggleMobileMenu}
          >
            Confirmação de Presença
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
