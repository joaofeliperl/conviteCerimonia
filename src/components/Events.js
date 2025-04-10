import React from 'react';
import './Events.css';

function Events() {
  const googleCalendarLinkCerimonia =
    "https://calendar.google.com/calendar/r/eventedit?text=A%20Cerim%C3%B3nia&dates=20250517T100000/20250517T110000&details=Venha%20celebrar%20conosco%20este%20momento%20especial!&location=8%C2%BA%20Registro%20Civil%2C%20Av.%20Constantino%20Nery%2C%203872%20-%20Chapada";

  const googleCalendarLinkFesta =
    "https://calendar.google.com/calendar/r/eventedit?text=Festa%20P%C3%B3s%20Cerim%C3%B4nia&dates=20250517T110000/20250517T150000&details=Venha%20curtir%20a%20festa%20no%20La%20Parrilla%20Grill!&location=La%20Parrilla%20Grill%2C%20Franceses%2C%20Av.%20Des.%20Jo%C3%A3o%20Machado%2C%2063%20-%20Alvorada";


  return (
    <section id="programacao" className="events">
      <h2>Programação</h2>

      <div className="events-container">
        <div className="event normal">
          <div className="event-info">
            <h3>A cerimônia</h3>
            <p className="event-date">17 de Maio de 2025 - 10h00</p>
            <p className="event-address">
              8º Registro Civil, <br />
              Av. Constantino Nery, 3872 - Chapada
            </p>
          </div>

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
                href={googleCalendarLinkCerimonia}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adicionar à agenda
              </a>
            </p>
          </div>
        </div>

        <div className="event reverse">
          <div className="event-info">
            <h3>Festa Pós Cerimônia</h3>
            <p className="event-date">17 de Maio de 2025 - 11h00</p>
            <p className="event-address">
              La Parrilla Grill, Franceses <br />
              Av. Des. João Machado, 63 - Alvorada
            </p>
          </div>

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
                href={googleCalendarLinkFesta}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adicionar à agenda
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="event-extra-info">
        <p>O consumo será individual, mas a alegria de tê-los conosco não tem preço!</p>
      </div>
    </section>
  );
}

export default Events;
