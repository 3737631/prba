import { useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import About from './components/About'
import Services from './components/Services'
import Journal from './components/Journal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Showreel />
        <About />
        <Services />
        <Journal />
      </main>
      <Footer />
    </div>
  )
}
