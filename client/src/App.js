import React, { Component } from 'react';
import './App.css';
import Joystick from './Components/Joystick';
import AimArea from './Components/AimArea';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
  }

  getJoystickCenterPos() {
    //var x = this.state.joystickleft + this.state.joystickwidth / 2;
    var y = 0; // need to get screen height, and subtract joystickbottom and joystickheight / 2
  }
  
  onTouchCancel(e) {
    e.stopPropagation();
    console.log("onTouchCancel");
  }

  onTouchEnd(e) {
    e.stopPropagation();
    console.log("onTouchEnd");
  }

  onTouchMove(e) {
    e.stopPropagation();
    console.log("onTouchMove");
  }

  onTouchStart(e) {
    e.stopPropagation();
    console.log("onTouchStart");

    // check if it is in joystick region
    
  }

  render() {

    const oldReturn = (
    
    <div className="App" onTouchCancel={this.onTouchCancel} onTouchEnd={this.onTouchEnd} onTouchMove={this.onTouchMove} onTouchStart={this.onTouchStart}>
        
  </div>
  );

    return (
      <div className="App">
      <Joystick></Joystick>
      <AimArea></AimArea>
      </div>
    );
  }
}

export default App;
