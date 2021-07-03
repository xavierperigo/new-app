import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
    <div className="App">

      <Header title={'My New App'}/>
      
      <Menu />
      
      <Home title={'My Home'}/>
    </div>
    </Router>
  );
}

export default App;
