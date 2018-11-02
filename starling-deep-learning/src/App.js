import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lander from './components/Lander';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Lander />
        </header>
      </div>
    );
  }
}

export default App;
