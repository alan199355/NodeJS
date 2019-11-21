import React from "react";
import { Button } from "antd";
import "./BubbleSort.scss";
class BubbleSort extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { val: 7 },
        { val: 1 },
        { val: 3 },
        { val: 9 },
        { val: 4 },
        { val: 2 },
        { val: 8 },
        { val: 5 },
        { val: 6 }
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
    this.state.list.map((item, index) => {
      item.index = index;
      item.resetIndex = index;
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
    let list = [
      { val: 7, index: 1 },
      { val: 1, index: 0 },
      { val: 3, index: 2 },
      { val: 7, index: 3 },
      { val: 4, index: 4 },
      { val: 2, index: 5 },
      { val: 8, index: 6 },
      { val: 5, index: 7 },
      { val: 6, index: 8 }
    ];
    setTimeout(() => {
      let list2 = [
        { val: 7, index: 2 },
        { val: 1, index: 0 },
        { val: 3, index: 1 },
        { val: 9, index: 3 },
        { val: 4, index: 4 },
        { val: 2, index: 5 },
        { val: 8, index: 6 },
        { val: 5, index: 7 },
        { val: 6, index: 8 }
      ];
      this.setState({
        list: list2
      });
    }, 1500);
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
      item.class = "blink";
      if (nextItem) nextItem.class = "blink";

      if (nextItem && item.val > nextItem.val) {
        item.index++;
        nextItem.index--;
        let temp = JSON.parse(JSON.stringify(nextItem));
        let tempItem = JSON.parse(JSON.stringify(item));
        // console.log(temp, tempItem, item, nextItem, "map");
        list[index + 1] = tempItem;
        list[index] = temp;
      }
      if (index > 0) {
        list[index - 1].class = "";
      }
      history.push(JSON.parse(JSON.stringify(list)));
    });
    let interval = setInterval(() => {
      console.log("interval");
      this.setState({
        list: history[index]
      });
      index++;
      if (index === 9) {
        let lastStatus = history[index - 1];
        lastStatus.map(item => {
          item.resetIndex = item.index;
        });
        lastStatus[index - 1].class = "";
        this.setState({
          list: lastStatus
        });
        console.log("end");
        clearInterval(interval);
      }
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
      let list = JSON.parse(JSON.stringify(this.state.list));
      list.sort((a, b) => {
        return a.resetIndex - b.resetIndex;
      });
      return list.map((item, index) => {
        let style = {
          left: item.index * 110 + "px"
        };
        style = Object.assign(style, item.style);
        return (
          <li className={item.class} key={item.val} style={style}>
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
