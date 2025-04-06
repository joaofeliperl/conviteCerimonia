import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CountdownSection from './components/CountdownSection'; // Importação adicionada
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* Seção de contagem regressiva */}
      <CountdownSection />
      <About />
      <Events />
      <Gallery />
    </div>
  );
}

export default App;
