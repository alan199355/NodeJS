import React from "react";
import "./debounce.scss";
class Debounce extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.drawLine.bind(this);
    // this.handleMouseMove.bind(this);
  }
  componentDidMount() {
    console.warn("did mount11");
    let i = 0;
    // setInterval(() => {
    //   i++;
    //   this.drawLine(i * 3);
    // }, 1000);
  }
  componentDidUpdate() {
    console.info("did update");
  }
  drawLine(x) {
    let canvas = document.getElementById("can");
    let ctx = canvas.getContext("2d");
    if (x > 300) {
      this.setState({
        count: 0
      });
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 500);
    ctx.closePath();
    ctx.stroke();
  }
  handleMouseMove(e) {
    let count = this.state.count;
    count++;
    this.setState({
      count: count++
    });
    console.log(this, "mouse over");
    this.drawLine(count * 3);
  }
  render() {
    console.info("render");
    return (
      <div className="container">
        <div
          onMouseMove={this.handleMouseMove.bind(this)}
          className="content"
        ></div>
        <canvas id="can" />
      </div>
    );
  }
}
export default Debounce;
