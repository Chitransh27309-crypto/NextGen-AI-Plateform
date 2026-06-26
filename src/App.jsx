import './App.css'

import NavbarComponent from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavbarComponent />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}

export default App