import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Gérer l'état du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur quand le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={` fixed w-fit rounded-md top-3 left-1/2 shadow-lg transform -translate-x-1/2 p-4 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-10 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}
    >

      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <h1 className='mr-10 font-bold font-eu text-2xl'>
          Andrianarivo
        </h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
