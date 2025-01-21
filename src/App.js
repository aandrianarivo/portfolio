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
            <TypingEffect />
          </div>
          <div className="w-1/2">
            <Hero />
          </div>
        </section>
        <section
          id="about"
          className="m-4 p-8 bg-gradient-to-t from-slate-800 to-gray-900 h-screen flex flex-col justify-center items-center text-white"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-100 tracking-wide">
              About Me
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate web developer with a strong focus on creating modern,
              user-friendly, and accessible websites. With experience in React, Tailwind
              CSS, and other cutting-edge technologies, I enjoy crafting intuitive
              solutions that enhance user experiences. Let's build something great
              together!
            </p>
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
                <p className="text-lg font-semibold text-white">2023 - Présent</p>
                <p className="text-gray-300">Développeur Front-End chez XYZ</p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg font-semibold text-white">2021 - 2023</p>
                <p className="text-gray-300">Formation en Développement Web</p>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="skills"
          className="m-4 p-8 bg-gradient-to-l from-zinc-700 to-gray-800 h-screen w-full text-white flex flex-col items-center"
        >
          {/* Titre principal */}
          <h1 className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 pb-2">
            My Skills
          </h1>

          {/* Sous-section : GitHub */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">GitHub</h2>
            <p className="text-gray-300">
              Explore my work on GitHub! I specialize in building scalable, modern web applications.
            </p>
          </div>

          {/* Carrousel des compétences front-end */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Front-End Skills</h3>
            <ImageCarousel styleAnimation="animate-leftright" tabs={tabsOfSkillsFront} />
          </div>

          {/* Carrousel des compétences back-end */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Back-End Skills</h3>
            <ImageCarousel styleAnimation="animate-marquee" tabs={tabsOfSkillsBackend} />
          </div>
        </section>

        <section
          id="services"
          className="m-4 p-8 bg-gradient-to-l from-zinc-700 to-gray-800 min-h-screen text-white flex flex-col items-center"
        >
          {/* Titre principal */}
          <h1 className="text-4xl font-bold mb-12 text-center border-b-4 border-blue-500 pb-2 animate-fade-in">
            My Services
          </h1>

          {/* Introduction */}
          <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl">
            I provide a wide range of professional services to help you achieve your goals.
            From modern web development to intuitive design and cloud solutions,
            I am dedicated to delivering high-quality results tailored to your needs.
          </p>

          {/* Cartes de services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            {/* Carte 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-code text-4xl text-blue-500 mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">Web Development</h2>
              <p className="text-gray-300">
                Building responsive, modern, and scalable web applications tailored to
                your needs.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-paint-brush text-4xl text-green-500 mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
              <p className="text-gray-300">
                Designing intuitive and user-friendly interfaces for web and mobile
                platforms.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-cloud text-4xl text-purple-500 mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">Cloud Integration</h2>
              <p className="text-gray-300">
                Deploying and managing applications on modern cloud platforms like AWS
                or Azure.
              </p>
            </div>
          </div>

          {/* Processus de travail */}
          <div className="mt-16 w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-lightbulb text-4xl text-yellow-500 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-300">
                  Understanding your needs and creating a clear plan to achieve your goals.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-code text-4xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-300">
                  Writing clean and efficient code to bring your ideas to life.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Testing</h3>
                <p className="text-gray-300">
                  Ensuring everything works perfectly with thorough testing.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-rocket text-4xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Deployment</h3>
                <p className="text-gray-300">
                  Launching your project and providing ongoing support.
                </p>
              </div>
            </div>
          </div>

          {/* Témoignages */}
          <div className="mt-16 w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What My Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">
                  "Working with this developer was a fantastic experience! The project was
                  delivered on time and exceeded my expectations."
                </p>
                <p className="text-right text-white font-bold mt-4">- Client A</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">
                  "Amazing work! Very professional and the communication was excellent."
                </p>
                <p className="text-right text-white font-bold mt-4">- Client B</p>
              </div>
            </div>
          </div>

          {/* Appel à l'action */}
          <div className="text-center mt-16 animate-bounce">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
              Get in Touch
            </button>
          </div>
        </section>
        <section id="contact" className="m-4 p-4 bg-gray-900 text-white min-h-screen flex items-center justify-center">
          <div className="max-w-7xl w-full grid grid-rows-3 grid-cols-6 gap-4">
            {/* Compartiment 1 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-2 row-span-2 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-4">GitHub</h2>
              <p className="text-sm text-gray-400">My experiments (aka projects)</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">View Profile</button>
            </div>

            {/* Compartiment 2 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-2 row-span-1 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-4">Stats</h2>
              <p className="text-sm text-gray-400">Stars: 412 | Followers: 244</p>
            </div>

            {/* Compartiment 3 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-2 row-span-1 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-4">Blog</h2>
              <p className="text-sm text-gray-400">Latest post: Introduction to Java</p>
              <p className="text-xs text-gray-500">Sep 15, 2024</p>
            </div>

            {/* Compartiment 4 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-1 row-span-1 flex items-center justify-center">
              <h2 className="text-lg font-semibold">Letterboxed</h2>
            </div>

            {/* Compartiment 5 */}
            <div className="bg-orange-600 rounded-lg p-6 shadow-md col-span-2 row-span-1 flex items-center justify-center">
              <h2 className="text-lg font-semibold">What is this error?</h2>
            </div>

            {/* Compartiment 6 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-1 row-span-1 flex items-center justify-center">
              <h2 className="text-lg font-semibold">Web Drafts</h2>
            </div>

            {/* Compartiment 7 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md col-span-6 row-span-1 flex flex-wrap items-center justify-center">
              {/* Icons */}
              <div className="flex space-x-4">
                <img src="icon1.png" alt="Icon 1" className="w-8 h-8" />
                <img src="icon2.png" alt="Icon 2" className="w-8 h-8" />
                <img src="icon3.png" alt="Icon 3" className="w-8 h-8" />
                <img src="icon4.png" alt="Icon 4" className="w-8 h-8" />
                <img src="icon5.png" alt="Icon 5" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
};

export default App;
