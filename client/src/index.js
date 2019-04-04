import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import JoystickManager from './UI/JoystickManager';
import AimAreaManager from './UI/AimAreaManager';

import * as Phaser from 'phaser';

import MainScene from './Phaser/Scenes/MainScene';

var config = {
  type: Phaser.WEBGL,
  pixelArt: true,
  //roundPixels: true,
  parent: 'phaser-content',
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
      default: 'arcade'
  },
  scene: [
      MainScene
  ],
  scale: {
    parent: 'yourgamediv',
    mode: Phaser.Scale.FIT,
    width: window.innerWidth,
    height:window.innerHeight
}
};

var main = new Phaser.Game(config);

//var scaleManager = new Phaser.ScaleManager(main);

window.main = main;

window.mainScene = main.scene.keys["MainScene"];

// set up UI managers first, so react can pull state from them
window.joystickManager = new JoystickManager();
window.aimAreaManager = new AimAreaManager();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// The joystick relies on a few methods

// One for continuing to monitor that touch's ID and updating the touch position based on its movements

// One for detecting first touch, determining if the touch is within the bounds of the joystick circle area, and registering its ID as the currentJoystickTouchID

var currentJoystickTouchID = 0;
var joyStickIsBeingTouched = false;

const onReceiveJoystickTouchCoords = (x, y) => {

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

const stopJoystickMovement = () => {
  console.log("stopping joy movement");

  window.mainScene.playerToMove.x = 0;
  window.mainScene.playerToMove.y = 0;
}

const onTouchStart = (e) => {
  e.preventDefault();

  var touches = e.changedTouches;

  for(var i = 0; i < touches.length; i++) {
    
    //console.log("tstart, x: " + touches[i].pageX + " y: " + touches[i].pageY);

    // TODO check for bounds

    //console.log("area bounds: " + window.joystick.areaBoundsX);

    if(touches[i].pageX < 300) {

      onReceiveJoystickTouchCoords(touches[i].pageX,
        touches[i].pageY);




     // window.joystick.setJoystickPos( touches[i].pageX, touches[i].pageY)
    }

    if(!joyStickIsBeingTouched) {
      joyStickIsBeingTouched = true;
    }
  }

  // skip testing if touch is in bounds of the joystick circle area for now..

};

const onTouchMove = (e) => {
  e.preventDefault();

  var touches = e.changedTouches;

  for(var i = 0; i < touches.length; i++) {
    
    if(touches[i].pageX < 300) {
      onReceiveJoystickTouchCoords(touches[i].pageX,
        touches[i].pageY);
    } else {
      stopJoystickMovement();
    }
  } 
}

const startup = () => {
  var element = document.getElementById('root');

  element.addEventListener("touchstart", onTouchStart, false);

  element.addEventListener("touchmove", onTouchMove, false);

  element.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("end");
    stopJoystickMovement();
  }, false);
}

window.addEventListener("load", function() { 
  window.scrollTo(0, 1);
  console.log("load called");
  startup();

  console.log("x: " + window.innerWidth + "y: " + window.innerHeight);
});

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('resize', () => {
    console.log("calling resize");
    //window.main.resize(window.innerWidth, window.innerHeight);
    window.mainScene.resize(window.innerWidth, window.innerHeight);
    //main.scene.keys["MainScene"].resize(window.innerWidth, window.innerHeight);
});



