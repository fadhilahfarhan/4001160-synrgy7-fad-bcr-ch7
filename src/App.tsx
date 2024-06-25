import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
