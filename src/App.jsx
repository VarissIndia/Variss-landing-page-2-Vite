import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
// import Services from './components/Services'
// import Security from './components/Security'
// import Stats from './components/Stats'
// import CTA from './components/CTA'
// import Footer from './components/Footer'
import './App.css'

function App() {

  return (
      <div className="inset-0 bg-gradient-to-br from-[#f9fbfb] to-[#bfd0ec]">
      <Navbar />
      <Hero />
      <Features />
      {/* <Services />
      <Security />
      <Stats />
      <CTA />
      <Footer /> */}
    </div>
  )
}

export default App
