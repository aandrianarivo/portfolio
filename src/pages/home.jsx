import React from 'react'
import TestComponent from '../components/test/test'
import TypingEffect from '../typing/typing'
import Hero from '../hero/hero'

export default function Home() {
  return (
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
  )
}
