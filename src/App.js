import React from 'react';
import Navbar from './components/nav/navbar';
import TypingEffect from './typing/typing';
import Hero from './hero/hero';

const App = () => {
  return (
    <div className=" bg-gradient-to-r from-slate-50 to-gray-100 p-10 font-assisant relative min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Contenu de la page */}
        
        <section id="home" className=" m-4 flex w-full h-full max-sm:flex-col max-sm:items-center max-sm:justify-center text-center shadow-2xl " >
          <div className='w-1/2'>
            <h1 className='text-5xl font-assisant font-semibold text-gray-500 text-center'>ANDRIANRIVO Anthony</h1>
            <TypingEffect/>
          </div>
          <div className="w-1/2">
            <Hero/>
          </div>
        </section>
        <section id="about" className=" m-4 p-4 bg-gradient-to-t from-slate-800 to-gray-800  h-screen ">
          <h1>About</h1>
        </section>
        <section id="services" className=" m-4 p-4 bg-gradient-to-l from-zinc-700 to-gray-500  h-screen ">
          <h1>Services</h1>
        </section>
        <section id="contact" className=" m-4 p-4 bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-100  h-screen bg-gray-500">
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
