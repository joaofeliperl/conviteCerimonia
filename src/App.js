import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CountdownSection from './components/CountdownSection'; 
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
      <Events />
      <Gallery />
    </div>
  );
}

export default App;
