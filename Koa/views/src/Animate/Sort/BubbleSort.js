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
    this.history = [123];
    this.state.list.map(item => {
      item.style = {
        left: item.index * 110 + "px"
      };
    });
    this.randomList = this.randomList.bind(this);
    this.sort = this.sort.bind(this);
    this.reset = this.reset.bind(this);
    this.next = this.next.bind(this);
  }
  randomList() {
    console.log("test");
  }
  next() {
    let list = this.state.list;
    list[0].index++;

    list[1].index--;
    console.log(this);
    // let temp = JSON.parse(JSON.stringify(list[1]));
    // let temp2 = JSON.parse(JSON.stringify(list[0]));
    // list[1] = temp2;
    // list[0] = temp;
    this.setState({
      list: list
    });
  }
  async sort() {
    let list = this.state.list;
    let history = [];
    let index = 0;
    list.map((item, index) => {
      let nextItem = list[index + 1];
      if (nextItem && item.val < nextItem.val) {
        // let temp = next.style.left;
        // next.style.left = item.style.left;

        item.index++;
        nextItem.index--;
        item.style = {
          left: item.index * 110 + "px"
        };
        nextItem.style = {
          left: nextItem.index * 110 + "px"
        };
        let temp = JSON.parse(JSON.stringify(nextItem));
        let tempItem = JSON.parse(JSON.stringify(item));
        console.log(temp, tempItem, item, nextItem, "map");
        list[index + 1] = tempItem;
        list[index] = temp;
      }
      history.push(JSON.parse(JSON.stringify(list)));
    });
    let interval = setInterval(() => {
      if (index === 9) {
        clearInterval(interval);
      } else {
        this.setState({
          list: history[index]
        });
      }
      index++;
    }, 1500);

    console.log(history, "history");
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
        let style = {
          left: item.index * 110 + "px"
        };
        return (
          <li key={item.val} style={style}>
            {item.val}
          </li>
        );
      });
    };
    return (
      <div className="bubble-container">
        <ul className="list">{renderItem()}</ul>
        <Button onClick={this.randomList} type="primary">
          Random11
        </Button>
        <Button onClick={this.sort} type="primary">
          Sort
        </Button>
        <Button onClick={this.next} type="primary">
          Next
        </Button>
        <Button onClick={this.reset} type="primary">
          Reset
        </Button>
      </div>
    );
  }
}
export default BubbleSort;
