import React from 'react'
import TestComponent from '../components/test/test'

export default function About() {
  return (
    <TestComponent idComponent='about' >
      <div className="w-full p-10 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
          About Me
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, I’m Anthony, a Master’s student at EMIT Fianarantsoa with a strong passion for web development and software engineering. While I enjoy the full-stack development process, I find myself most excited by back-end development 🔧💻. I thrive on the challenge of solving complex problems and building the infrastructure that powers smooth and efficient applications. This problem-solving mindset was shaped during my time as a scout, where I learned the value of teamwork, adaptability, and perseverance 🌱. I’m constantly exploring new technologies and approaches, and I’m always eager to apply my knowledge to create meaningful, user-focused solutions 🔍. I look forward to collaborating with others and continuing to grow as a developer, always seeking new opportunities to learn and make an impact 🎯.            </p>
      </div>
  </TestComponent>  )
}
