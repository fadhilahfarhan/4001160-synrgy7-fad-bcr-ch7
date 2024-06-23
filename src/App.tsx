import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchCars from './pages/searchCars/SearchCars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<SearchCars/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
