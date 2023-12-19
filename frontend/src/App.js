
import React from 'react';
import {  Dashboard, LoginForm, ProfileMUI, Sellers, AddSeller, SortSellers } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

 
  return (
    <div>
   
    <BrowserRouter>
      <Routes>
       

        <Route path="/" element={<Dashboard /> } />
        <Route path="/login" element={<LoginForm /> } />
        <Route path="/Profile" element={<ProfileMUI /> } />
        {/* Seller */}
        <Route path="/Sellers" element={<Sellers /> } />
        <Route path="/AddSeller" element={<AddSeller /> } />
        <Route path="/SortSellers" element={<SortSellers /> } />
       
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


