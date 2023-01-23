import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseInfo from './pages/ExerciseInfo';
import Favorites from './pages/Favorites'
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <Box sx={{width: {xl:'100%'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseInfo />}/>
        <Route path="/Favorites" element={<Favorites />}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App