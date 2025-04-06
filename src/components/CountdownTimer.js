import React, { useState, useEffect, useCallback } from 'react';
import './CountdownTimer.css';

function CountdownTimer({ targetDate }) {
  // useCallback garante que a função seja recriada apenas quando targetDate mudar
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60)
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  const intervals = ['dias', 'horas', 'minutos'];

  return (
    <div className="countdown">
      <p className="countdown-title">Faltam:</p>
      <div className="countdown-items">
        {intervals.map(interval => (
          <div className="countdown-item" key={interval}>
            <span className="number">
              {timeLeft[interval] !== undefined ? timeLeft[interval] : 0}
            </span>
            <span className="label">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;
