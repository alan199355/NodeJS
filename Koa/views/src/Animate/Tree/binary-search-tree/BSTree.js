import React from 'react'
import { Button } from 'antd'
import BinarySearchTree from './BinarySearchTree'
import './BSTree.scss'
class BSTree extends React.Component {
  constructor() {
    super()
    this.state = {
      bsTree: new BinarySearchTree()
    }
    this.insertVal = this.insertVal.bind(this)
    this.treeDetail = this.treeDetail.bind(this)
    let bsTree = new BinarySearchTree()
  }
  insertVal() {
    let val = Math.floor(Math.random() * 100)
    let bsTree = this.state.bsTree
    bsTree.insert(val)
    console.log(bsTree, val, bsTree.toString())
    // canvas绘图
    let canvas = document.getElementById('tree')
    let ctx = canvas.getContext('2d')
    //  计算画布的宽度
    let width = canvas.offsetWidth
    //  计算画布的高度
    let height = canvas.offsetHeight
    //  设置宽高
    canvas.width = width
    canvas.height = height
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 1
    ctx.beginPath()

    ctx.arc(100, 75, 25, 0, 2 * Math.PI)
    // ctx.lineTo(250,100)
    ctx.stroke()

    this.setState({
      bsTree: bsTree
    })
    // let bsTree = new BinarySearchTree()
    // for (let i = -0; i < 10; i++) {
    //   bsTree.insert(i)
    // }
  }
  treeDetail() {
    let bsTree = this.state.bsTree
    console.log(bsTree, bsTree.root, bsTree.toString())
  }
  render() {
    // console.log(bsTree, 'tree')

    return (
      <div className="tree-container">
        <div className="btn-group">
          <Button onClick={this.insertVal} type="primary">
            插值
          </Button>
          <Button onClick={this.treeDetail} type="primary">
            详情
          </Button>
        </div>
        <canvas id="tree"></canvas>
      </div>
    )
  }
}
export default BSTree
