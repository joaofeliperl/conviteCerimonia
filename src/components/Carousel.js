import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Importa as imagens do carrossel
import imagem1 from '../assets/images/carousel/imagem1.jpeg';
import imagem2 from '../assets/images/carousel/imagem2.jpeg';
import imagem3 from '../assets/images/carousel/imagem3.jpeg';
import imagem4 from '../assets/images/carousel/imagem4.jpeg';

const images = [imagem1, imagem2, imagem3, imagem4];

function Carousel() {
    const [current, setCurrent] = useState(0);

    // Avança automaticamente a cada 5 segundos (opcional)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="carousel">
            {/* Container dos slides */}
            {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === current ? 'active' : ''}`}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}

            {/* Botões de navegação */}
            <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Carousel;
