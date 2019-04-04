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
    var touches = e.changedTouches;

    for(var i = 0; i < touches.length; i++) {
      
      //console.log("tstart, x: " + touches[i].pageX + " y: " + touches[i].pageY);

      // TODO check for bounds

      //console.log("area bounds: " + window.joystick.areaBoundsX);

      if(touches[i].pageX < 300) {

        this.onReceiveJoystickTouchCoords(touches[i].pageX,
          touches[i].pageY);




      // window.joystick.setJoystickPos( touches[i].pageX, touches[i].pageY)
      }

     
    }

    // skip testing if touch is in bounds of the joystick circle area for now..
  }

  onTouchEnd(e) {
    this.stopJoystickMovement();
  }

  onTouchCancel(e) {

  }

  onTouchMove(e) {
    e.stopPropagation();

    var touches = e.changedTouches;

    for(var i = 0; i < touches.length; i++) {
      
      if(touches[i].pageX < 300) {
        this.onReceiveJoystickTouchCoords(touches[i].pageX,
          touches[i].pageY);
      } else {
        this.stopJoystickMovement();
      }
    }
  }

  stopJoystickMovement() {
    console.log("stopping joy movement");
  
    window.mainScene.playerToMove.x = 0;
    window.mainScene.playerToMove.y = 0;
  }

  onReceiveJoystickTouchCoords(x, y) {

    var deltaX = x - window.joystickManager.props.centerX;
    var deltaY = y - window.joystickManager.props.centerY;

    // find hypoteneuse
    var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if(dist > window.joystickManager.props.w / 2) {
      // get ratio of dist to max
      var ratio = dist / window.joystickManager.props.w;

      deltaX /= ratio;
      deltaY /= ratio;
    }

    //var angle = Math.atan2(deltaY, deltaX);
    var normalizedX = deltaX / (window.joystickManager.props.w / 2);
    var normalizedY = deltaY / (window.joystickManager.props.h / 2);

   // console.log("Angle : " + angle);

   //console.log("ratioXY: " + ratioXY);

   // x component

     // console.log("normalizedX: " + normalizedX );
     // console.log("normalizedY: " + normalizedY );
    
      // normalize further

      //pass on x , y to scene
  
    window.mainScene.playerToMove.x = normalizedX;
    window.mainScene.playerToMove.y = normalizedY;
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