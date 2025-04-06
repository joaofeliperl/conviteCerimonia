import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">F&amp;E</div>
      {/* Data, exibida apenas em telas pequenas */}
      <div className="nav-date">17.05.25</div>
      {/* Ícone de menu hamburguer (aparece em telas pequenas) */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMobileMenu}>Home</a>
        </li>
        <li>
          <a href="#info" onClick={toggleMobileMenu}>Informações Importantes</a>
        </li>
        <li>
          <a href="#programacao" onClick={toggleMobileMenu}>Programação</a>
        </li>
        <li>
          <a href="#confirmacao" className="confirm-button" onClick={toggleMobileMenu}>
            Confirmação de Presença
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
