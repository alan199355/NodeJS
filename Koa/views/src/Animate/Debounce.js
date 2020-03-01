import React from 'react'
import _ from 'lodash'
import './debounce.scss'
class Debounce extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.drawLine.bind(this)
    // this.drawLine2.bind(this);
    this.drawLine2 = _.debounce(this.drawLine2, 200)
    this.clear = this.clear.bind(this)
    this.clear2 = this.clear2.bind(this)
    // this.handleMouseMove.bind(this);
  }
  componentDidMount() {
    console.warn('did mount11')
    let i = 0
    // setInterval(() => {
    //   i++;
    //   this.drawLine(i * 3);
    // }, 1000);
  }
  componentDidUpdate() {
    // console.info("did update");
  }
  drawLine(x) {
    let canvas = document.getElementById('can')
    let ctx = canvas.getContext('2d')
    // if (x > 300) {
    //   this.setState({
    //     count: 0
    //   });
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, 500)
    ctx.closePath()
    ctx.stroke()
  }
  drawLine2(x) {
    let canvas = document.getElementById('debo_can')
    let ctx = canvas.getContext('2d')
    console.log(x, 'canvas2')
    // if (x > 300) {
    //   this.setState({
    //     count: 0
    //   });
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, 500)
    ctx.closePath()
    ctx.stroke()
  }
  clear() {
    let canvas = document.getElementById('can')
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  clear2() {
    let canvas = document.getElementById('debo_can')
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  test() {
    console.log('11')
  }
  handleMouseMove(e) {
    e.persist()
    let count = this.state.count
    count++

    if (count > 100) {
      this.setState({
        count: 0
      })
      this.clear()
      this.clear2()
    } else {
      this.setState({
        count: count++
      })
    }
    // console.log(_.debounce, "mouse over");
    this.drawLine(count * 3)
    this.drawLine2(count * 3)
    _.debounce(() => {
      console.log(count)
    }, 200)
  }
  render() {
    return (
      <div className="container">
        <div
          onMouseMove={this.handleMouseMove.bind(this)}
          className="content"
        ></div>
        <div className="main">
          <canvas id="can" />
          <canvas id="debo_can"></canvas>
        </div>
      </div>
    )
  }
}
export default Debounce
