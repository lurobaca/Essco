import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Solutions from './components/Solutions.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  useEffect(()=>{
    const year = document.getElementById('year')
    if(year) year.textContent = new Date().getFullYear()
  },[])
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
