import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import LoanedOut from "./pages/LoanedOut";
import Selling from "./pages/Selling";
import MenuBar from "./components/MenuBar";

function App() {
  return (
   <>
      
      <MenuBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/loaned_out" element={<LoanedOut />} />
        <Route path="/selling" element={<Selling />} />
      </Routes>
 
      </>
  );
}

export default App;
