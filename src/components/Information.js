import React from 'react';
import './Information.css';

function Information() {
    return (
        <section className="information">
            {/* Conteúdo já existente */}
            <div className="information-content">
                {/* Seu conteúdo atual */}
            </div>

            {/* Nova div para a informação de traje */}
            <div id="info" className="information-traje">
                <h3>Traje</h3>
                <p>
                    Pensando na harmonia do nosso grande dia, reservamos o Azul Serenity para
                    os padrinhos e o noivo. Contamos com seu carinho em escolher outra cor e
                    pedimos que venha vestido em traje <strong>ESPORTE FINO</strong>.
                </p>
            </div>
        </section>
    );
}

export default Information;
