import React, { useState } from 'react';
import GiftDialog from './GiftDialog';
import './GiftList.css';
import juliosImage from '../assets/images/giftlist/imagem-julios.jpeg';
import macarrao from '../assets/images/giftlist/macarrao.jpeg';
import inssImage from '../assets/images/giftlist/inssImage.png';
import buque from '../assets/images/giftlist/buqueImage.png';
import divino from '../assets/images/giftlist/divino.jpeg';
import nazare from '../assets/images/giftlist/nazare.png';
import qrcode1 from '../assets/images/pix/qrcode1.jpeg';
import qrcode2 from '../assets/images/pix/qrcode2.jpeg';
import qrcode3 from '../assets/images/pix/qrcode3.jpeg';
import qrcode4 from '../assets/images/pix/qrcode4.jpeg';
import qrcode5 from '../assets/images/pix/qrcode5.jpeg';
import qrcode6 from '../assets/images/pix/qrcode6.jpeg';

const giftItems = [
    {
        id: 1,
        title: 'Só para dizer que não dei nada',
        image: juliosImage,
        giftLink:
            '00020126360014BR.GOV.BCB.PIX0114+5592995167293520400005303986540565.905802BR5925Esther dos Santos Simplic6009SAO PAULO62140510dGAyD9B1Wn6304A91D',
        qrImage: qrcode1,
        price: 'R$ 65,90'
    },
    {
        id: 2,
        title: 'Curso de culinária para o noivo',
        image: macarrao,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406100.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510umtREvAiiW6304477B',
        qrImage: qrcode2,
        price: 'R$ 100,00'
    },
    {
        id: 3,
        title: 'Ajuda para a aposentadoria dos noivos',
        image: inssImage,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406200.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510m7BmNFRxqR6304F3CC',
        qrImage: qrcode3,
        price: 'R$ 200,00'
    },
    {
        id: 4,
        title: 'Taxa para a noiva não jogar o buquê para sua namorada',
        image: buque,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406300.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510iibSXDVfh06304C134',
        qrImage: qrcode4,
        price: 'R$ 300,00'
    },
    {
        id: 5,
        title: 'Se por uma intervenção divina, você se sentir tocado',
        image: divino,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406400.005802BR5925Esther dos Santos Simplic6009SAO PAULO621405108a29FVgRXr6304072B',
        qrImage: qrcode5,
        price: 'R$ 400,00'
    },
    {
        id: 6,
        title: 'Ajuda nos boletos pós casamento',
        image: nazare,
        giftLink: '00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406500.005802BR5925Esther dos Santos Simplic6009SAO PAULO621405104dBbOk2sI46304A6C0',
        qrImage: qrcode6,
        price: 'R$ 500,00'
    }
];

function GiftList() {
    const [selectedGift, setSelectedGift] = useState(null);

    return (
        <section id="giftlist" className="giftlist">
            <h2>Lista de Presentes</h2>
            <p>
                Sua presença no nosso casamento já é um presentão… mas se quiser caprichar ainda mais,
                aceitamos mimos! Preparamos uma listinha com algumas ideias — só pra facilitar, viu?
                Obrigado por fazer parte dessa festa (e por ajudar a manter os noivos felizes e equipados)!
            </p>
            <div className="gift-cards">
                {giftItems.map(gift => (
                    <div key={gift.id} className="gift-card">
                        <img src={gift.image} alt={gift.title} />
                        <h3>{gift.title}</h3>
                        <p className="gift-price">{gift.price}</p>
                        <button
                            className="present-button"
                            onClick={() => setSelectedGift(gift)}
                        >
                            Presentear
                        </button>
                    </div>
                ))}
            </div>
            {selectedGift && (
                <GiftDialog gift={selectedGift} onClose={() => setSelectedGift(null)} />
            )}
        </section>
    );
}

export default GiftList;
