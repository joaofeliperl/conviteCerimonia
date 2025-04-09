import React, { useEffect, useRef } from 'react';
import musicFile from '../assets/music/beautifulThings.mp3';
import './MusicControl.css';

function MusicControl({ playing, onToggle }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch(error => {
        console.error("Erro ao tentar reproduzir o áudio:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div className="music-control">
      <button onClick={onToggle} className="music-control-button">
        {playing ? 'Pause Música' : 'Play Música'}
      </button>
      <audio ref={audioRef} loop style={{ display: 'none' }}>
        <source src={musicFile} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default MusicControl;
