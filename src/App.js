import React from 'react';
import Navbar from './components/nav/navbar';
import TypingEffect from './typing/typing';
import Hero from './hero/hero';
import ImageCarousel from './imageCarousel/imageCarousel';
import { tabsOfSkillsBackend, tabsOfSkillsFront } from './data';


const App = () => {

  return (
    <div className=" bg-gradient-to-r from-slate-50 to-gray-100 p-10 font-assisant relative min-h-screen">
      <Navbar />
      <div className="m-10 pt-20">
        {/* Contenu de la page */}
        
        <section id="home" className="m-4 p-10 flex w-full h-full max-sm:flex-col max-sm:items-center max-sm:justify-center text-center shadow-2xl " >
          <div className='  w-1/2'>
            <div className='relative '>
              <div className="  absolute h-50 w-50 inset-0 bg-slate-600 opacity-40 blur-lg"></div>
              <h1 className='text-7xl m-2 font-anton text-gray-700 text-center'>ANDRIANRIVO Anthony,</h1>
            </div>
            <TypingEffect/>
          </div>
          <div className="w-1/2">
            <Hero/>
          </div>
        </section>
        <section id="about" className=" m-4 p-4 bg-gradient-to-t from-slate-800 to-gray-800  h-screen ">
          <h1>About</h1>
        </section>
        <section id="skills" className=" m-4 p-4 bg-gradient-to-l from-zinc-700 to-gray-500  h-screen w-full flex-col ">
          <h1>Skills</h1>
          <ImageCarousel styleAnimation={'animate-leftright'} tabs={tabsOfSkillsFront}/>
          <ImageCarousel styleAnimation={"animate-marquee"} tabs={tabsOfSkillsBackend}/>
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
