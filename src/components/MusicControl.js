import React, { useState, useRef } from 'react';
import musicFile from '../assets/music/Benson Boone - Beautiful Things  (Instrumental, Violin Version).mp3';
import './MusicControl.css';

function MusicControl() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayback = async () => {
    if (!playing) {
      try {
        // Tenta tocar o áudio (necessário interação do usuário)
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Erro ao tentar reproduzir o áudio:", error);
      }
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="music-control">
      <button onClick={togglePlayback} className="music-control-button">
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
