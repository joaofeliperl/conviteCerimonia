import React, { useState } from 'react';
import ConfirmPresenceDialog from './ConfirmPresenceDialog';
import './Confirmacao.css';

function Confirmacao() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="confirmacao">
            <div className="confirmacao-container">
                <h2>Confirmação de Presença</h2>
                <div className="confirmacao-buttons">
                    <button
                        className="confirm-button"
                        onClick={() => {
                            setDialogOpen(true);
                        }}
                    >
                        Confirmar Presença
                    </button>
                </div>
            </div>

            {dialogOpen && (
                <ConfirmPresenceDialog
                    defaultChoice="vou"
                    onClose={() => setDialogOpen(false)}
                />
            )}
        </section>
    );
}

export default Confirmacao;
