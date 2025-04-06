import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Gallery />
      <RSVP />
    </div>
  );
}

export default App;
