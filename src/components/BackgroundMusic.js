// BackgroundMusic.js
import React from 'react';

function BackgroundMusic({ play }) {
  return play ? (
    <iframe
      title="Background Music"
      src="https://www.youtube.com/embed/j-625hYhsmg?autoplay=1&loop=1&playlist=j-625hYhsmg&controls=0&showinfo=0&autohide=1"
      style={{ display: 'none' }}  // Não exibe o player na tela
      allow="autoplay"
    ></iframe>
  ) : null;
}

export default BackgroundMusic;
