import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection';
import Footersection from './components/Footersection';
import Servicesection from './components/Servicesection';
import Projectsection from './components/Projectsection';
import Contactsection from './components/Contactsection';
import Visimisisection from './components/Visimisisection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <div className='w-full mx-auto'>
        <Herosection />
        <Aboutsection />
        <Visimisisection />
        <Servicesection />
        <Projectsection />
        <Contactsection />
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  </React.StrictMode>,
)
