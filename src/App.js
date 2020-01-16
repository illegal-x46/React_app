import React from 'react';
import './App.css';
import Menu from './components/Menu';
import './css/tailwind.css';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Portfolio />
    </div>
  );
}

export default App;
