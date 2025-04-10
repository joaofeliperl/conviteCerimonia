import React, { useState, useEffect } from 'react';
import ConfirmPresenceDialog from './ConfirmPresenceDialog';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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
    <>
      <nav className="navbar">
        <div className="nav-logo">F&amp;E</div>
        <div className="nav-date">17.05.25</div>
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
            <a href="#programacao" onClick={toggleMobileMenu}>Programação</a>
          </li>
          <li>
            <a href="#info" onClick={toggleMobileMenu}>Traje</a>
          </li>
          <li>
            <button
              className="confirm-button"
              onClick={() => {
                toggleMobileMenu();
                setDialogOpen(true);
              }}>
              Confirmação de Presença
            </button>
          </li>
        </ul>
      </nav>
      {dialogOpen && <ConfirmPresenceDialog onClose={() => setDialogOpen(false)} />}
    </>
  );
}

export default Navbar;
