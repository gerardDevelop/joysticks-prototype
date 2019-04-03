export default class AimAreaManager {
  
  constructor() {
    this.props = {
      top: window.innerHeight - (25 + 120),
      left: window.innerWidth - (25 + 120),
      width: 120,
      height: 120
    };

    this.props.centerX = this.props.left + this.props.width / 2;
    this.props.centerY = this.props.top + this.props.height / 2;
  }
}