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
    this.renderTree = this.renderTree.bind(this)
    this.renderTreeNode = this.renderTreeNode.bind(this)
    this.mapTree = this.mapTree.bind(this)
    this.reset = this.reset.bind(this)
    let bsTree = new BinarySearchTree()
  }
  // 重置数据和canvas
  reset() {
    let canvas = document.getElementById('tree')
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let bsTree = new BinarySearchTree()
    this.setState({
      bsTree: bsTree
    })
  }
  // 插入值
  insertVal() {
    let val = Math.floor(Math.random() * 100)
    let bsTree = this.state.bsTree
    // 判断值是否已存在树中
    if (!bsTree.contains(val)) {
      bsTree.insert(val)
    }

    console.log(bsTree, val, bsTree.toString())

    this.setState({
      bsTree: bsTree
    })
    this.renderTree()
  }
  // 绘制树图案
  renderTree() {
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
    ctx.lineWidth = 0
    // ctx.beginPath()
    let bsTree = this.state.bsTree
    this.mapTree(bsTree.root, 1, 500, 80, 'root')
    ctx.font = '100px'
    // ctx.stroke()
  }
  // 遍历树，绘制每个节点
  mapTree(node, level, x, y, type) {
    // console.log(node, level, 'map')
    let canvas = document.getElementById('tree')
    let ctx = canvas.getContext('2d')

    ctx.beginPath()

    if (type === 'left') {
      // ctx.moveTo(x, y)
      x -= 100
    } else if (type === 'right') {
      // ctx.moveTo(x, y)
      x += 100
    }
    y += 50
    this.renderTreeNode(ctx, x, y, node.value, type)
    if (node.left) {
      this.mapTree(node.left, level + 1, x, y, 'left')
    }
    if (node.right) {
      this.mapTree(node.right, level + 1, x, y, 'right')
    }
  }
  renderTreeNode(ctx, x, y, val, type) {
    ctx.arc(x, y, 25, 0, 2 * Math.PI)
    // ctx.clearRect(x - 25, y - 25, 50, 50)
    ctx.fillStyle = '#ff0000'
    ctx.font = '80px #ff0000'
    // ctx.strokeText(val, x - 5, y + 5)
    ctx.fillText(val, x - 5, y + 5)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(x, y)
    if (type === 'left') {
      ctx.lineTo(x + 100, y - 50)
    } else if (type === 'right') {
      ctx.lineTo(x - 100, y - 50)
    }
    ctx.closePath()
    ctx.stroke()
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
          <Button onClick={this.reset} type="primary">
            重置
          </Button>
        </div>
        <canvas id="tree"></canvas>
      </div>
    )
  }
}
export default BSTree
