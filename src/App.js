import React from 'react'
import CognitiveUsd from './pages/CognitiveUsd'
import Future from './pages/Future'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Testimonial from './pages/Testimonial'
import Curriculum from "./pages/Curriculum"
import Instructors from "./pages/Instructors"
import About from "./pages/About"
import Footer from "./pages/Footer"
import Coursel from "./pages/Coursel"
import "./styles/App.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
         <Navbar/> 
         <Home/>
         <Future/>
         <Coursel/>
         <CognitiveUsd/>
         <Testimonial/>
         <Curriculum/>
         <Instructors/>
         <About/>
         <Footer/>
    </>
  )
}

export default App
