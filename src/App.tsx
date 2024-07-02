import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import Dashboard from './pages/Dashbboard/Dashboard';
import CarsDashboard from './pages/CarsDashboard/CarsDashboard';
import Login from './pages/Login/Login';
import AddCars from './pages/AddCars/AddCars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/admin/Login' element={<Login/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/cars' element={<CarsDashboard/>}/>
        <Route path='/admin/cars/create' element={<AddCars/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
