import logo from './img/umdocedom.jpg';
import './App.css';
import Icons from './components/Icons/Icons';
import Gallery from './components/Gallery/Gallery';
import React, { Component }  from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Icons />
      </header>
    </div>
  );
}

export default App;
