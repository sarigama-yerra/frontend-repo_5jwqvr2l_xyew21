import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import InfoSections from './components/InfoSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <InfoSections />
      <Footer />
    </div>
  )
}

export default App
