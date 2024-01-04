import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';

import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Navbar from './pages/Navbar.jsx';
import Comment from './comment/Comment.jsx';
import Payment from './payment/pay.jsx';
import RegisterForm from './register/Register.jsx';
import Success from './components/Success/Suc.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/book" element={<Payment/>} />
          <Route path="/reg" element={<RegisterForm/>} />
          <Route path="/pay" element={<Success/>} />
          
        </Routes>
      </Sidebar>
  </BrowserRouter>
  );
};

export default App;