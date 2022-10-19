import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

//pages
import JobSwireTest from "./pages/JobSwireTest";
import Mentors from "./pages/Mentors";
import Hiring from "./pages/Hiring";
import Contact from "./pages/Contact";
import TestForm from './components/TestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<JobSwireTest />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/hiring' element={<Hiring />} />
        <Route path='/contact' element={<Contact />} />  
        <Route path='/test-form' element={<TestForm />} />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App
