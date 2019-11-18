import React from "react";
import { Button } from "antd";
import "./BubbleSort.scss";
class BubbleSort extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { val: 1, index: 0 },
        { val: 2, index: 1 },
        { val: 3, index: 2 },
        { val: 4, index: 3 },
        { val: 5, index: 4 },
        { val: 6, index: 5 },
        { val: 7, index: 6 },
        { val: 8, index: 7 },
        { val: 9, index: 8 }
      ],
      resetList: [
        { val: 1, index: 0 },
        { val: 2, index: 1 },
        { val: 3, index: 2 },
        { val: 4, index: 3 },
        { val: 5, index: 4 },
        { val: 6, index: 5 },
        { val: 7, index: 6 },
        { val: 8, index: 7 },
        { val: 9, index: 8 }
      ]
    };
    this.state.list.map(item => {
      item.style = {
        left: item.index * 110 + "px"
      };
    });
    this.randomList = this.randomList.bind(this);
    this.sort = this.sort.bind(this);
    this.reset = this.reset.bind(this);
  }
  randomList() {
    console.log("test");
  }
  async sort() {
    let list = this.state.list;
    list.map((item, index) => {
      let nextItem = list[index + 1];
      if (nextItem && item.val < nextItem.val) {
        // let temp = next.style.left;
        // next.style.left = item.style.left;
        let temp = nextItem;
        item.index++;
        item.style = {
          left: item.index * 110 + "px"
        };
        list[index] = nextItem;
        list[index + 1] = item;
      }
      console.log(list);
      this.setState({
        list: list
      });
      await sleep(1000)
    });
    function sleep(ms){
        return new Promise(resolve=>setTimeout(resolve,ms))
    }
  }
  reset() {
    let resetList = this.state.resetList;
    this.setState({
      list: resetList
    });
  }
  render() {
    let renderItem = () => {
      return this.state.list.map(item => {
        return (
          <li key={item.val} style={item.style}>
            {item.val}
          </li>
        );
      });
    };
    return (
      <div className="bubble-container">
        <ul className="list">{renderItem()}</ul>
        <Button onClick={this.randomList} type="primary">
          Random
        </Button>
        <Button onClick={this.sort} type="primary">
          Sort
        </Button>
        <Button onClick={this.reset} type="primary">
          Reset
        </Button>
      </div>
    );
  }
}
export default BubbleSort;
