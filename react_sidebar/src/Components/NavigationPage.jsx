import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

function NavigationPage() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home'  index element={<Home/> } />
        <Route path='/about' element={ <About/>} />
        <Route path='/skills' element={ <Skills/>} />
        <Route path='/projects' element={ <Project/> } />
        <Route path='/contact' element={ <Contact/>} />
      </Routes>
    </React.Fragment>
  )
}

export default NavigationPage;