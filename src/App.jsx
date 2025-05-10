import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // <div className="min-h-screen bg-primary">
    <div className="min-h-screen bg-white text-black dark:bg-primary dark:text-lightText transition-colors duration-300">

      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App