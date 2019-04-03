export default class JoystickManager {
  
  constructor() {
    this.props = {
      x: 25,
      y: window.innerHeight - 75 - 25,
      w: 75,
      h: 75
    };

    this.props.centerX = this.props.x + this.props.w / 2;
    this.props.centerY = this.props.y + this.props.h / 2; 
  }



}