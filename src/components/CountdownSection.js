import React from 'react';
import CountdownTimer from './CountdownTimer';
import './CountdownSection.css';

function CountdownSection() {
  return (
    <section className="countdown-section">
      <h2>É oficial! vamos nos casar!</h2>
      <p>
        O grande dia está chegando e estamos transbordando de alegria para viver
        esse momento ao lado de pessoas tão especiais. Mais do que uma data, esse
        dia tem um enorme significado para nós... e nada faria mais sentido do que
        compartilharmos tudo com vocês!
      </p>
      <p>
        Esperamos por você nesse sonho que tem sido mais inenarrável!
      </p>
      
      {/* Componente de contagem regressiva */}
      <CountdownTimer targetDate="2025-05-17" />
    </section>
  );
}

export default CountdownSection;
