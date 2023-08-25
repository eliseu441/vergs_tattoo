import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/header/Header'
import Home from './pages/Home/Home'
import SideNavBar from './layout/sidebar/SideNavBar';
import MultiStepForm from "./pages/MultiStepForm";


function App() {
  return (
    <Router>
      <Header/>
      <SideNavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalize" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}

export default App;
