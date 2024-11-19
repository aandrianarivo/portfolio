import React from 'react';
import Navbar from './components/nav/navbar';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Contenu de la page */}
        <section id="home" className="h-screen bg-gray-200">
          <h1>Home</h1>
        </section>
        <section id="about" className="h-screen bg-gray-300">
          <h1>About</h1>
        </section>
        <section id="services" className="h-screen bg-gray-400">
          <h1>Services</h1>
        </section>
        <section id="contact" className="h-screen bg-gray-500">
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
