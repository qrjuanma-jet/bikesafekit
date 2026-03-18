import React from 'react'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import Evidence from './components/Evidence'
import ProductOffer from './components/ProductOffer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Evidence />
      <ProductOffer />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
