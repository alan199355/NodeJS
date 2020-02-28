import React from 'react'
import { Button } from 'antd'
import BinarySearchTree from './BinarySearchTree'
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
        <Button onClick={this.insertVal} type="primary">
          插值
        </Button>
        <Button onClick={this.treeDetail} type="primary">
          详情
        </Button>
      </div>
    )
  }
}
export default BSTree
