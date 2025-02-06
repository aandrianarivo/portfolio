import React from 'react'
import TestComponent from '../components/test/test'
import Badge from '../components/badge/badge'

export default function Project() {
  return (
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
                <Badge name='react' />
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
        {/* Appel à l'action */}
        {/* <div className="text-center mt-16 animate-bounce">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
            Get in Touch
          </button>
        </div> */}
      </div>
  </TestComponent>
  )
}
