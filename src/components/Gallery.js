import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Galeria</h2>
      <div className="images">
        <img src="/images/foto1.jpg" alt="Foto 1" />
        <img src="/images/foto2.jpg" alt="Foto 2" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </section>
  );
}

export default Gallery;
