// import React from 'react'
import Intro from "../Components/Intro";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

const Main:React.FC = () => {
  return (
    <div className="lg:mx-32 md:mx-4">
    <Intro/>
    <About/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default Main