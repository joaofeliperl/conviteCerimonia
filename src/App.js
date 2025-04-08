import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CountdownSection from './components/CountdownSection';
import Events from './components/Events';
import Information from './components/Information';
import Confirmacao from './components/Confirmacao';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  useEffect(() => {
    // Desabilita a restauração automática do scroll e força o scroll para o topo
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <BackgroundMusic />
      <Header />
      <CountdownSection />
      <Events />
      <Information />
      <Confirmacao />
      <Footer />
    </div>
  );
}

export default App;
