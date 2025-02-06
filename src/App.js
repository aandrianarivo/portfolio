import React from 'react';
import Navbar from './components/nav/navbar';

import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Skills from './pages/skills';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className=" bg-gray-100 font-assisant relative min-h-screen">
        <Navbar />
        <div className="">
          <Home />
          <About />
          <Skills />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default App;
