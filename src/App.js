import React, { useEffect, useState } from 'react';
import Navbar from './components/nav/navbar';
import TypingEffect from './typing/typing';
import Hero from './hero/hero';
import ImageCarousel from './imageCarousel/imageCarousel';
import { tabsOfSkillsBackend, tabsOfSkillsFront } from './data';
import TestComponent from './components/test/test';


const App = () => {
  const [encodedSvg, setEncodedSvg] = useState('');

  useEffect(() => {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="map">
        <path fill="#f2cca4" d="M57,14H2V55H55a7,7,0,0,0,7-7h0V37.222Z"></path>
        <polygon fill="#c48b4d" points="39 50 44.5 39 50 50 39 50"></polygon>
        <polygon fill="#e0a155" points="7 28 11 20 15 28 7 28"></polygon>
        <polygon fill="#c48b4d" points="13 24 16 18 22 28 15 28 13 24"></polygon>
        <path fill="#99795f" d="M19.5,49h-4A4.505,4.505,0,0,1,11,44.5,2.5,2.5,0,0,0,8.5,42H2V40H8.5A4.505,4.505,0,0,1,13,44.5,2.5,2.5,0,0,0,15.5,47h4A2.5,2.5,0,0,0,22,44.5v-7A4.505,4.505,0,0,1,26.5,33h5A2.5,2.5,0,0,0,34,30.5v-4A4.505,4.505,0,0,1,38.5,22H52v2H38.5A2.5,2.5,0,0,0,36,26.5v4A4.505,4.505,0,0,1,31.5,35h-5A2.5,2.5,0,0,0,24,37.5v7A4.505,4.505,0,0,1,19.5,49Z"></path>
        <path fill="#4b824b" d="M31 25H27a1 1 0 010-2h3V20a1 1 0 012 0v4A1 1 0 0131 25zM27 22H24a1 1 0 01-.895-.553l-1-2a1 1 0 011.79-.894L24.618 20H27a1 1 0 010 2zM32 44H28a1 1 0 01-1-1V40a1 1 0 012 0v2h3a1 1 0 010 2zM36 47H32a1 1 0 010-2h3V42a1 1 0 012 0v4A1 1 0 0136 47z"></path>
        <rect width="9" height="5" x="39" y="27" fill="#70cbe1" rx="1.972"></rect>
        <path fill="#cea179" d="M55.077,9H52V41h3a7.07,7.07,0,0,1,7,7V15.882A6.9,6.9,0,0,0,55.077,9Z"></path>
        <path fill="#bc926f" d="M55.077,9H52v3h3.077A6.9,6.9,0,0,1,62,18.882v-3A6.9,6.9,0,0,0,55.077,9Z"></path>
        <path fill="#68aa68" d="M27 30a1 1 0 01-1-1V18a1 1 0 012 0V29A1 1 0 0127 30zM32 52a1 1 0 01-1-1V39a1 1 0 012 0V51A1 1 0 0132 52z"></path>
        <rect width="2" height="2" x="50" y="22" fill="#896d58"></rect>
        <rect width="2" height="8" x="50" y="14" fill="#ddb999"></rect>
        <rect width="2" height="17" x="50" y="24" fill="#ddb999"></rect>
      </svg>
    `;
    setEncodedSvg(btoa(svgContent));
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div className=" bg-gray-100 font-assisant relative min-h-screen">
        <Navbar />
        <div className="">
          {/* Contenu de la page */}
          {/* <section id="home" className="m-4 p-10 flex w-full h-screen max-sm:flex-col max-sm:items-center max-sm:justify-center text-center shadow-2xl " >
          <div className='  w-1/2'>
            <div className='relative '>
              <div className="  absolute h-50 w-50 inset-0 bg-slate-600 opacity-40 blur-lg"></div>
              <h1 className='text-7xl m-2 font-anton text-gray-700 text-center'>ANDRIANRIVO Anthony,</h1>
            </div>
            <TypingEffect />
          </div>
          <div className="w-1/2">
            <Hero />
          </div>
        </section> */}
          <TestComponent idComponent='home' position='right'>
            <div className='w-full flex flex-col md:flex-row p-10'>
              <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                <div className='relative'>
                  <div className="absolute h-50 w-50 inset-0 bg-slate-600 opacity-40 blur-lg"></div>
                  <h1 className='text-5xl md:text-7xl m-2 font-anton text-gray-700 text-center'>
                    ANDRIANARIVO Anthony ,
                  </h1>
                </div>
                <TypingEffect />
              </div>

              <div className="w-full md:w-1/2">
                <Hero />
              </div>
            </div>

          </TestComponent>
          <TestComponent idComponent='about' >
            <div className="w-full p-10 text-center space-y-6">
              <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
                About Me
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello, I’m Anthony, a Master’s student at EMIT Fianarantsoa with a strong passion for web development and software engineering. While I enjoy the full-stack development process, I find myself most excited by back-end development 🔧💻. I thrive on the challenge of solving complex problems and building the infrastructure that powers smooth and efficient applications. This problem-solving mindset was shaped during my time as a scout, where I learned the value of teamwork, adaptability, and perseverance 🌱. I’m constantly exploring new technologies and approaches, and I’m always eager to apply my knowledge to create meaningful, user-focused solutions 🔍. I look forward to collaborating with others and continuing to grow as a developer, always seeking new opportunities to learn and make an impact 🎯.            </p>
              {/*             
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
              React
            </span>
            <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full shadow-md">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full shadow-md">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-md">
              Node.js
            </span>
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full shadow-md">
              Git
            </span>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg font-semibold ">2023 - Présent</p>
                <p className="">Développeur Front-End chez XYZ</p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg font-semibold t">2021 - 2023</p>
                <p className="">Formation en Développement Web</p>
              </li>
            </ul> */}
            </div>
          </TestComponent>
          <TestComponent idComponent='skills' colors={{ color1: 'bg-green-300', color2: 'bg-yellow-300', color3: 'bg-purple-300' }} position='left'>
            <div id='skills' className='flex flex-col p-10 justify-center items-center text-gray-700'>
              {/* Titre principal */}
              <h1 className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 pb-2">
                My Skills
              </h1>
              {/* Carrousel des compétences front-end */}
              {/* <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-center">Front-End Skills</h3>
              <ImageCarousel styleAnimation="animate-leftright" tabs={tabsOfSkillsFront} />
            </div> */}

              {/* Carrousel des compétences back-end */}
              {/* <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Back-End Skills</h3>
              <ImageCarousel styleAnimation="animate-marquee" tabs={tabsOfSkillsBackend} />
            </div> */}

              {/* Sous-section : GitHub */}
              <div className="max-w-7xl mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-gray-300">

                {/* Compartiment 1: Soft Skills */}

                <div className="bg-red-500 text-gray-50 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                  <ul className="list-disc text-left">
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                  </ul>
                </div>

                {/* Compartiment 2: Operating Systems */}
                <div className="bg-blue-600 text-gray-50 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex flex-col items-center text-center">
                  <h2 className="text-xl font-semibold mb-4 ">Operating Systems</h2>
                  <p className="text-sm">Linux, macOS, Windows</p>
                </div>

                {/* Compartiment 3: GitHub */}
                <div className="bg-purple-600 text-gray-50 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex flex-col items-center text-center">
                  <h2 className="text-xl font-semibold mb-4">GitHub</h2>
                  <p className="text-sm">My experiments (aka projects)</p>
                  <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded">View Profile</button>
                </div>

                {/* Compartiment 4: Letterboxed */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-md col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center">
                  <h2 className="text-lg font-semibold">Letterboxed</h2>
                </div>

                {/* Compartiment 5: Cartography Formation */}
                <div className="bg-orange-500 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 text-center">
                  {/* <h3 className="text-xl font-semibold mb-2 text-gray-50">Cartography Formation</h3>
                <p className="text-center text-gray-50">I have a background in cartography, specializing in mapping and spatial analysis.</p> */}
                  <ImageCarousel styleAnimation="animate-leftright" tabs={tabsOfSkillsFront} />
                  <ImageCarousel styleAnimation="animate-marquee" tabs={tabsOfSkillsBackend} />
                </div>

                {/* Compartiment 6: Web Drafts */}
                <div
                  className="bg-yellow-400 rounded-lg p-6 shadow-md col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center relative overflow-hidden group hover:opacity-85"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,${encodedSvg}')`,
                  }}
                >
                  <h2 className="text-lg font-semibold text-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                    Cartography
                  </h2>
                </div>

                {/* Compartiment 7: Deployment */}
                <div className="bg-green-500 text-gray-50 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-6 row-span-1 flex flex-wrap items-center justify-center">
                  {/* Icons */}
                  <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                      <p className="text-center">Experience with deployment platforms like Heroku, AWS, and Docker.</p>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </TestComponent>
          <TestComponent idComponent="services" >
            <div
              className="p-10 text-gray-700 flex flex-col items-center"
            >
              {/* Titre principal */}
              <h1 className="text-4xl font-bold mb-12 text-center border-b-4 border-blue-500 pb-2 animate-fade-in">
                Projects
              </h1>

              {/* Introduction */}
              <p className="text-lg text-center mb-12 max-w-4xl">
                A travers mes experiences academiques et surtout professionel,j'ai pu developer et contribuer a different projet offrant des solutions a differents problems;
              </p>
              <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300'>
                <div className='bg-gray-900 p-6 rounded-lg shadow-lg h-fit'>
                  <h2 className="text-2xl font-bold mb-2">Professional</h2>
                  <ul className="space-y-4">
                    <li className="border-l-4 border-green-500 pl-4">
                      <p className="text-lg font-semibold ">2023 - Présent</p>
                      <p className="">Développeur Front-End chez XYZ</p>
                    </li>
                    <li className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-lg font-semibold t">2021 - 2023</p>
                      <p className="">Formation en Développement Web</p>
                    </li>
                  </ul>
                </div>
                <div className='bg-gray-900 p-6 rounded-lg shadow-lg'>
                  <h2 className="text-2xl font-bold mb-2">Personnal</h2>
                  <ul className="space-y-4">
                    <li className="border-l-4 border-orange-500 pl-4">
                      <p className="text-lg font-semibold ">
                        2023 - Présent
                      </p>
                      <p className="">Développeur Front-End chez XYZ</p>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
                        React
                      </span>
                      <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full shadow-md">
                        Symfony
                      </span>
                    </li>
                    <li className="border-l-4 border-purple-500 pl-4">
                      <p className="text-lg font-semibold t">2021 - 2023</p>
                      <p className="">Formation en Développement Web</p>
                    </li>
                    <li className="border-l-4 border-blue-500 pl-4">
                      <p className="text-lg font-semibold t">2021 - 2023</p>
                      <p className="">Formation en Développement Web</p>
                    </li>
                    <li className="border-l-4 border-red-500 pl-4">
                      <p className="text-lg font-semibold t">2021 - 2023</p>
                      <p className="">Formation en Développement Web</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cartes de services */}
              {/*             
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-code text-4xl text-blue-500 mb-4"></i>
                  <h2 className="text-2xl font-bold mb-2">Web Development</h2>
                  <p className="">
                    Building responsive, modern, and scalable web applications tailored to
                    your needs.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-paint-brush text-4xl text-green-500 mb-4"></i>
                  <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
                  <p className="">
                    Designing intuitive and user-friendly interfaces for web and mobile
                    platforms.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-cloud text-4xl text-purple-500 mb-4"></i>
                  <h2 className="text-2xl font-bold mb-2">Cloud Integration</h2>
                  <p className="">
                    Deploying and managing applications on modern cloud platforms like AWS
                    or Azure.
                  </p>
                </div>
              </div>
             */}
              {/* Appel à l'action */}
              <div className="text-center mt-16 animate-bounce">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
                  Get in Touch
                </button>
              </div>
            </div>
          </TestComponent>
        </div>
      </div>
    </div>
  );
};

export default App;
