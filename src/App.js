// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CountdownSection from './components/CountdownSection';
import Events from './components/Events';
import Information from './components/Information';
import Confirmacao from './components/Confirmacao';
import GiftList from './components/GiftList';
import Footer from './components/Footer';
import MusicControl from './components/MusicControl';
import MusicConsentModal from './components/MusicConsentModal';
import './App.css';

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const toggleMusic = () => setMusicPlaying(prev => !prev);

  const handleMusicConsent = (consent) => {
    if (consent) {
      // Se o usuário permitir, iniciamos a reprodução da música
      setMusicPlaying(true);
    }
    setShowMusicConsent(false);
  };

  return (
    <div className="App">
      {showMusicConsent && <MusicConsentModal onConsent={handleMusicConsent} />}
      <Navbar />
      <MusicControl playing={musicPlaying} onToggle={toggleMusic} />
      <Header />
      <CountdownSection />
      <Events />
      <Information />
      <Confirmacao />
      <GiftList />
      <Footer />
    </div>
  );
}

export default App;
