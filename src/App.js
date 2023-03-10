import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
const App = () => {
  return (
    <div>
    <Header />  
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    Akash Bhingare
    </div>
  )
}

export default App