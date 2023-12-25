
import React from 'react';
import {  Dashboard, LoginForm, ProfileMUI, Sellers, AddSeller, SortSellers, Customer, AddCustomer, SortCustomers, Orders } from './pages';
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

        {/* Customer */}
        <Route path="/Customers" element={<Customer /> } />
        <Route path="/AddCustomer" element={<AddCustomer /> } />
        <Route path="/SortCustomers" element={<SortCustomers /> } />
       
        <Route path="/Orders" element={<Orders /> } />

        {/* Policy */}
        <Route path="/Policy" element={<Policy /> } />
        <Route path="/PolicyEdit/:policyId" element={<PolicyEdit /> } />
        <Route path="/create-policy" element={<AddPolicy /> } />
        {/* Analytics */}
        <Route path="/Analytics" element={<Analytics /> } />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


