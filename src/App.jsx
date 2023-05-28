import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Companies from './components/companies/Companies'
import Residency from './components/residencies/Residency'
import Value from './components/value/Value'
import Contact from './components/contactus/Contact'
import Footer from './components/footer/Footer'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div className='header__hero'>
        <div className="white__gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residency />
      <Value />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
