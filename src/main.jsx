import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection';
import Footersection from './components/Footersection';
import Imgsection from './components/Imgsection';
import Servicesection from './components/Servicesection';
import Projectsection from './components/Projectsection';
import Contactsection from './components/Contactsection';
import Visimisisection from './components/Visimisisection';


const commonMotionProps = {
  initial: { opacity: 0, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: "easeInOut" },
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <div className='w-full mx-auto'>
          <Herosection />
          <Aboutsection />
          <Visimisisection />
          <Servicesection />
          <Visimisisection />
          <Projectsection />
          <Visimisisection />
          <Contactsection />
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  </React.StrictMode>,
)
