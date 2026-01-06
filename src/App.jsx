import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import Cohort from './components/Cohort'
import Dynamic from './components/Dynamic'
import NotFound from './components/NotFound'

const App = () => {
  const [name, setName] = useState('Zahir');

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home name={name} />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} >
          <Route path='/courses/cohort' element={<Cohort />} />
          <Route path='/courses/dynamic/:id?' element={<Dynamic />} />
        </Route>
        <Route path='/profile' element={<Profile name={name} setName={setName} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
