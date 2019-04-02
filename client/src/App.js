import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JoyWrapper from './components/JoyWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="joystick-circle"></div>
        <div id="aim-circle"></div>
      </div>
    );
  }
}

export default App;
