// Header.js
import React, { useState } from 'react';
import Carousel from './Carousel';
import BackgroundMusic from './BackgroundMusic';
import './Header.css';

function Header() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setMusicPlaying(prev => !prev);
  };

  return (
    <header className="header">
      <div id="home" className="hero">
        <h1>Felipe & Esther</h1>
        <p>Manaus. 17 Maio 2025</p>
      </div>
      {/* Botão de play/pause para a música de fundo */}
      <button className="music-toggle-button" onClick={toggleMusic}>
        {musicPlaying ? 'Pause Música' : 'Play Música'}
      </button>
      {/* Carrossel de fotos */}
      <Carousel />
      {/* Componente de música que é renderizado se musicPlaying for true */}
      <BackgroundMusic play={musicPlaying} />
    </header>
  );
}

export default Header;
