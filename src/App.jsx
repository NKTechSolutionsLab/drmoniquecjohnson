import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import AudienceSection from './components/AudienceSection'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ClientLogos from './components/ClientLogos'
import Speaking from './components/Speaking'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <AudienceSection />
      <About />
      <Services />
      <Testimonials />
      <ClientLogos />
      <Speaking />
      <CTA />
      <Footer />
    </>
  )
}

export default App
