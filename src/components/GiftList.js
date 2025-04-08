import React, { useState } from 'react';
import GiftDialog from './GiftDialog';
import './GiftList.css';
import juliosImage from '../assets/images/giftlist/imagem-julios.jpeg';
import qrcode1 from '../assets/images/pix/qrcode1.jpeg';

const giftItems = [
    {
        id: 1,
        title: 'Só para dizer que não dei nada',
        image: juliosImage,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+5592995167293520400005303986540565.905802BR5925Esther dos Santos Simplic6009SAO PAULO62140510dGAyD9B1Wn6304A91D',
        qrImage: qrcode1
    },
    { id: 2, title: 'Presente 2', image: 'https://via.placeholder.com/300?text=Presente+2', giftLink: 'https://link-presente-2.com' },
    { id: 3, title: 'Presente 3', image: 'https://via.placeholder.com/300?text=Presente+3', giftLink: 'https://link-presente-3.com' },
    { id: 4, title: 'Presente 4', image: 'https://via.placeholder.com/300?text=Presente+4', giftLink: 'https://link-presente-4.com' },
    { id: 5, title: 'Presente 5', image: 'https://via.placeholder.com/300?text=Presente+5', giftLink: 'https://link-presente-5.com' },
    { id: 6, title: 'Presente 6', image: 'https://via.placeholder.com/300?text=Presente+6', giftLink: 'https://link-presente-6.com' },
];

function GiftList() {
    const [selectedGift, setSelectedGift] = useState(null);

    return (
        <section id="giftlist" className="giftlist">
            <h2>Lista de Presentes</h2>
            <p>
                Aqui você pode ver nossa lista de presentes e colaborar com aquilo que desejamos para nosso novo lar.
                Agradecemos a sua presença e carinho!
            </p>
            <div className="gift-cards">
                {giftItems.map(gift => (
                    <div key={gift.id} className="gift-card">
                        <img src={gift.image} alt={gift.title} />
                        <h3>{gift.title}</h3>
                        <button className="present-button" onClick={() => setSelectedGift(gift)}>
                            Presentear
                        </button>
                    </div>
                ))}
            </div>
            {selectedGift && (
                <GiftDialog
                    gift={selectedGift}
                    onClose={() => setSelectedGift(null)}
                />
            )}
        </section>
    );
}

export default GiftList;
