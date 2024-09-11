import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Clients from './sections/Client.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import WorkExperience from './sections/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero/>
    <About/>
    <Projects/>
    <Clients/>
    <WorkExperience/>
    <Contact/>
    {/* <Footer/> */}
  </StrictMode>,
)
