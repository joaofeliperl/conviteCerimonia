import React from 'react';
import Carousel from './Carousel';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div id="home" className="hero">
        <h1>Felipe & Esther</h1>
        <p>Manaus. 17 Maio 2025</p>
      </div>
      {/* Carrossel de fotos */}
      <Carousel />
    </header>
  );
}

export default Header;
