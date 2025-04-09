import React from 'react';
import './MusicConsentModal.css';

function MusicConsentModal({ onConsent }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={() => onConsent(false)}>×</button>
                <h2>Experiência Completa</h2>
                <p>Para uma experiência completa, você permite tocar a música de fundo?</p>
                <button className="consent-button" onClick={() => onConsent(true)}>
                    Permitir
                </button>
            </div>
        </div>
    );
}

export default MusicConsentModal;
