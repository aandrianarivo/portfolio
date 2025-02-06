import React, { useEffect, useState } from 'react'
import TestComponent from '../components/test/test'
import ImageCarousel from '../imageCarousel/imageCarousel'
import { tabsOfSkillsBackend, tabsOfSkillsFront } from '../data'

export default function Skills() {
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
    <TestComponent idComponent='skills' colors={{ color1: 'bg-green-300', color2: 'bg-yellow-300', color3: 'bg-purple-300' }} position='left'>
    <div id='skills' className='flex flex-col p-10 justify-center items-center text-gray-700'>
      {/* Titre principal */}
      <h1 className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 pb-2">
        My Skills
      </h1>
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
  </TestComponent>  )
}
