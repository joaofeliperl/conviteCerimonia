import React, { useState } from 'react';
import './RSVP.css';

function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com um backend ou serviço de e-mail
    alert(`Obrigado, ${name}! Sua confirmação foi registrada.`);
  };

  return (
    <section className="rsvp">
      <h2>Confirmação de Presença</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Confirma presença:
          <input 
            type="checkbox" 
            checked={attending} 
            onChange={(e) => setAttending(e.target.checked)} 
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default RSVP;
