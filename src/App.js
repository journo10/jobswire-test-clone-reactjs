import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

//pages
import JobSwireTest from "./pages/JobSwireTest";
import Mentors from "./pages/Mentors";
import Hiring from "./pages/Hiring";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{marginTop:"10rem"}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<JobSwireTest />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/hiring' element={<Hiring />} />
        <Route path='/contact' element={<Contact />} />  
      </Routes>
    </div>
  )
}

export default App
