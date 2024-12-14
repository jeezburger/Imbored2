import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Pricing from './components/price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
      <Hero/>
      <Pricing/>
      <Testimonials />
      <Footer/>
      </div>
    </div>
  )
}

export default App
