// ./src/Pages/App.jsx

import React from 'react'
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/Layouts/Banner';
import About from '../components/Layouts/About';
import Menus from '../components/Layouts/Menus';
import Contact from '../components/Layouts/Contact';
import Footer from '../components/Layouts/Footer';

function App() {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Banner />
      <About />
      <Menus />
      <Contact />
      <Footer />
    </div>
  )
}

export default App