import React, { useState } from 'react';
import './GiftDialog.css';

function GiftDialog({ gift, onClose }) {
    const [copied, setCopied] = useState(false);
    const giftLink = gift.giftLink || 'https://www.seulink.com/pix';
    const qrImage = gift.qrImage || 'https://via.placeholder.com/200?text=QR+Code';

    const handleCopy = () => {
        navigator.clipboard.writeText(giftLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>Presentear: {gift.title}</h2>
                <div className="qr-code">
                    <img src={qrImage} alt="QR Code Pix" />
                </div>
                <div className="link-area">
                    <input type="text" value={giftLink} readOnly />
                    <button onClick={handleCopy}>{copied ? "Copiado!" : "Copiar Link"}</button>
                </div>
                <button className="dialog-close-button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

export default GiftDialog;
