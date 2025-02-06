import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    SetIsOpen(!isOpen);
  };

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
    <>
      <nav
      >
        <div className={`max-sm:hidden fixed w-fit rounded-md top-3 left-1/2 transform -translate-x-1/2 p-4 transition-all duration-300 z-50 ${isScrolled ? 'bg-white bg-opacity-10 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className='mr-10 font-bold font-eu text-2xl'>
              Andrianarivo
            </h1>
            <ul className="flex space-x-8 text-lg">
              <li><a href="#home" className={isScrolled ? '' : 'text-red-500'}>Home</a></li>
              <li><a href="#about" className={isScrolled ? '' : 'text-blue-600'}>About</a></li>
              <li><a href="#skills" className={isScrolled ? '' : 'text-purple-500'} >Skills</a></li>
              <li><a href="#services" className={isScrolled ? '' : 'text-gray-900'} >Services</a></li>
              <li><a href="#contact" className={isScrolled ? '' : 'text-green-500'} >Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="items-center md:hidden lg:hidden">
          <div className='flex justify-around p-5'>
            <h1 className='mr-10 font-bold font-eu text-2xl'>
              Andrianarivo
            </h1>
            <button onClick={toggleMobileMenu} className=" text-gray-50 bg-gray-400 rounded-md p-3 text-gray focus:outline-none">
              {toggleMobileMenu ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
        {
          isOpen && (
            <div className='lg:hidden bg-gray-500 text-center text-gray-50 h-fit w-full absolute top-35 left-0 z-50 rounded-sm backdrop-blur-sm'>
              <ul className="flex-col p-4 space-y-8 text-lg">
                <li><a href="#home" className='hover:text-gray-800' >Home</a></li>
                <li><a href="#about" className='hover:text-gray-800'>About</a></li>
                <li><a href="#skills" className='hover:text-gray-800'>Skills</a></li>
                <li><a href="#services" className='hover:text-gray-800'>Services</a></li>
                <li><a href="#contact" className='hover:text-gray-800'>Contact</a></li>
              </ul>
            </div>
          )
        }

      </nav>
    </>
  );
};

export default Navbar;
