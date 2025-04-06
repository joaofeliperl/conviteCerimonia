import React from 'react';
import './Events.css';

function Events() {
  return (
    <section className="events">
      <h2>Detalhes do Evento</h2>
      <div className="event">
        <h3>Cerimônia</h3>
        <p>Data, horário e local da cerimônia.</p>
      </div>
      <div className="event">
        <h3>Festa</h3>
        <p>Data, horário e local da festa.</p>
      </div>
    </section>
  );
}

export default Events;
