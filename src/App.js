
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   // createBrowser as Router,
//   Router,Route,
//   // Switch,
  
// } from "react-router-dom";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';




function App() {
  
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      </Routes></BrowserRouter> 
    {/* <Router>
    <Navbar title="Jacks" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Switch> 
    <Route path="/about" >
    <About/>
    </Route>
    <Route path="/">
    <TextForm showAlert={showAlert} heading="Enter Text Hear" mode={mode}/>
    </Route>
    </Switch> 
    </div>
    </Router> */}
    </>
  );
}

export default App;
