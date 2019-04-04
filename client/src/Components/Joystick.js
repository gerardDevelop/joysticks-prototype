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
    //this.resetJoystickPos = this.resetJoystickPos.bind(this);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
  } 

  componentDidMount() {
    window.joystick = this;
  }

  onTouchStart(e) {

  }

  onTouchEnd(e) {

  }

  onTouchCancel(e) {

  }

  onTouchMove(e) {

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
      <>
        <div id="joystick-toucharea" 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: window.innerWidth / 3,
            height: window.innerHeight
          }}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchCancel}
          onTouchMove={this.onTouchMove}
          >
        </div>
        
        <div id="joystick-circle" 
          style={{ 
            left: this.state.joyAreaLeft, 
            top: this.state.joyAreaTop,
            width: this.state.joyAreaWidth,
            height: this.state.joyAreaHeight,
          }}>
        </div>
      </>
    );
    
  }
}