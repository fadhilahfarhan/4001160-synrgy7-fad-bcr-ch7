import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import Dashboard from './pages/Dashbboard/Dashboard';
import CarsDashboard from './pages/CarsDashboard/CarsDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/dashboard/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/cars' element={<CarsDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
