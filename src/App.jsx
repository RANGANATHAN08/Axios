import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Edit from "./Pages/Edit";
import Create from "./Pages/Create";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  
  const [id,setId] =useState(0);
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users setId={setId}/>} />
          <Route path="/edit/:id" element={<Edit id={id}/>} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;