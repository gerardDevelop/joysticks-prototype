import React, { Component } from 'react';

// TODO - REIMPLEMENT THIS IN CANVAS OR INSIDE PHASER SCENE WITH A SPRITE, to reduce cpu load

export default class Joystick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //stickLeft: window.joystickManager.x,
      //stickTop: window.innerHeight - 77.5,
      //stickWidth: 30,
     // stickHeight: 30,

      joyAreaLeft: window.joystickManager.props.x,
      joyAreaTop: window.joystickManager.props.y,
      joyAreaWidth: window.joystickManager.props.w,
      joyAreaHeight: window.joystickManager.props.h
    };

    //this.setJoystickPos = this.setJoystickPos.bind(this);
   // this.getAreaBoundsX = this.getAreaBoundsX.bind(this);
   /// this.getAreaBoundsY = this.getAreaBoundsY.bind(this);
    //this.resetJoystickPos = this.resetJoystickPos.bind(this);
  } 

  componentDidMount() {
    window.joystick = this;
  }

  getAreaBoundsX() {
    return 50;
  }

  getAreaBoundsY() {
    return 50;
  }

  // called externally
  setJoystickPos(x, y) {
    // set the center of the joystick to the x, y coords

    this.setState({
      stickLeft: x - this.state.stickWidth / 2,
      stickTop: y - this.state.stickHeight / 2
    });
  }

  // called externally
  resetJoystickPos() {
    this.setState({
      stickLeft: 47.5,
      stickTop: window.innerHeight - 77.5,
    });
  }

  render() {

  //return <></> 
/*

<div id="joystick-stick" style={{ 
        left: this.state.stickLeft, 
        top: this.state.stickTop,
        width: this.state.stickWidth,
        height: this.state.stickHeight,
      }}>

      </div>

*/
    
    return (
      
      
      <div id="joystick-circle" style={{ 
            left: this.state.joyAreaLeft, 
            top: this.state.joyAreaTop,
            width: this.state.joyAreaWidth,
            height: this.state.joyAreaHeight,
        }}>
      </div>

      
      
    );
    
  }
}