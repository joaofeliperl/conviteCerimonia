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
import './App.css';

function App() {
  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const toggleMusic = () => setMusicPlaying(prev => !prev);

  return (
    <div className="App">
      <Navbar />
      <MusicControl playing={musicPlaying} onToggle={toggleMusic} />
      <Header />
      <CountdownSection />
      <Events />
      <Information />
      <Confirmacao />
      <GiftList />
      <Footer />
      {musicPlaying}
    </div>
  );
}

export default App;
