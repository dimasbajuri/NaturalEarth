// ./src/Pages/App.jsx

import React, { useState } from 'react'
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/Layouts/Banner';
import About from '../components/Layouts/About';
import Menus from '../components/Layouts/Menus';
import Contact from '../components/Layouts/Contact';
import Footer from '../components/Layouts/Footer';
import PopupModalBox from '../components/Fragments/PopupModalBox';

function App() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Banner />
      <About />
      <Menus />
      <Contact />
      <Footer setPopUp={setPopUp} />
      {popUp && <PopupModalBox setPopUp={setPopUp} popUp={popUp} />}
    </div>
  )
}

export default App