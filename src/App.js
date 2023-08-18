import React from 'react'
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

const App = () => {
  return (
    <>
      <Box  sx={{ width: { xl: "1688px" } }} m="auto" padding='0'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App