import React from 'react'
import Home from './Componets/Home'
import AboutMe from './Componets/AboutMe'
import VectorRaster from './Componets/VectorRaster'
import ContactSection from './Componets/ContactSection'

export default function App () {
  return (
    <div className='bg-[#3B3838]'>
      <Home />
      <AboutMe />
      <VectorRaster />
      <ContactSection />
    </div>
  )
}
