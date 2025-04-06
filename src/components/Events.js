import React from 'react';
import './Events.css';

function Events() {
  return (
    <section className="events">
      <h2>Programação</h2>
      
      <div className="events-container">
        {/* Evento: A cerimônia (texto-esquerda, mapa-direita) */}
        <div className="event normal">
          {/* Texto */}
          <div className="event-info">
            <h3>A cerimônia</h3>
            <p className="event-date">17 de Maio de 2025 - 10h00</p>
            <p className="event-address">
              8º Registro Civil das Pessoas Naturais, <br />
              Avenida Constantino Nery, 999 - Chapada, Manaus - AM
            </p>
          </div>
          
          {/* Mapa + Botões */}
          <div className="event-map">
            <iframe
              title="Mapa Registro Civil"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.26647812312!2d-60.0225542873388!3d-3.0735304213418577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0fff8f8631e5%3A0x43503625fe88e933!2s8%C2%BA%20Registro%20Civil%20das%20Pessoas%20Naturais!5e0!3m2!1spt-BR!2sbr!4v1743962563166!5m2!1spt-BR!2sbr"
              width="300"
              height="200"
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="event-links">
              <a
                href="https://maps.google.com?q=8%C2%BA+Registro+Civil+das+Pessoas+Naturais"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Direções
              </a>
              {" | "}
              <a
                href="https://calendar.google.com/calendar/r/eventedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adicionar à agenda
              </a>
            </p>
          </div>
        </div>

        {/* Evento: Festa Pós Cerimônia (INVERTIDO: mapa à esquerda, texto à direita) */}
        <div className="event reverse">
          {/* IMPORTANTE:
              No HTML, deixamos o texto antes e o mapa depois.
              A classe .reverse (row-reverse) fará o mapa aparecer à esquerda. */}

          {/* Texto (vem primeiro no HTML, mas aparecerá à direita visualmente) */}
          <div className="event-info">
            <h3>Festa Pós Cerimônia</h3>
            <p className="event-date">17 de Maio de 2025 - 12h00</p>
            <p className="event-address">
              La Parrilla Grill, <br />
              Rua Exemplo, 123, Bairro Modelo, Manaus - AM
            </p>
          </div>

          {/* Mapa + Botões (vem depois no HTML, mas aparecerá à esquerda) */}
          <div className="event-map">
            <iframe
              title="Mapa La Parrilla Grill"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0769525067976!2d-60.0358941151612!3d-3.07412023218794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c107967d367ed%3A0x1802363dd758e3fb!2sLa%20Parrilla%20Grill!5e0!3m2!1spt-BR!2sbr!4v1743962544463!5m2!1spt-BR!2sbr"
              width="300"
              height="200"
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="event-links">
              <a
                href="https://maps.google.com?q=La+Parrilla+Grill"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Direções
              </a>
              {" | "}
              <a
                href="https://calendar.google.com/calendar/r/eventedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adicionar à agenda
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
