import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Routes from './Routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <h1 className="App-title">NYT movie reviews</h1>
        </header>
        <div className="main">
          <Routes />
        </div>     
      </div>
    );
  }
}

export default App;