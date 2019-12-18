import React from "react";
import { Button } from "antd";
import "./QuickSort.scss";
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
      ],
      quickSortHistory: [],
      quickSortList: [],
      leftArr: [],
      centerArr: [],
      rightArr: []
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
    let originalList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomIndex = 0;
    let targetList = [];
    let index = 0;
    while (originalList.length > 0) {
      randomIndex = Math.floor(Math.random() * originalList.length);
      let val = originalList[randomIndex];
      targetList.push({
        val: val,
        index: index,
        resetIndex: index
      });
      index++;
      originalList.splice(randomIndex, 1);
    }
    this.setState({
      list: targetList
    });
    console.log(targetList);
  }
  next() {}
  sort() {
    let list = this.state.list;
    let res = this.quickSort(list, 0, "all");
    let index = 0;
    let history = this.state.quickSortHistory;
    let interval = setInterval(() => {
      console.log("pending");
      if (index === history.length) {
        console.log("end");
        clearInterval(interval);
      } else {
        this.setState({
          leftArr: history[index].list[0],
          centerArr: history[index].list[1],
          rightArr: history[index].list[2]
        });
        index++;
      }
    }, 1500);
    console.log(this.state.quickSortHistory, "quick");
    setTimeout(() => {}, 100);
  }
  quickSort(list, level, type) {
    const arr = [...list];
    const leftArr = [];
    const rightArr = [];
    let history = { level: level, type: type, list: [[], [], []] };
    if (arr.length <= 1) {
      return arr;
    }

    const pivotEle = arr.shift();
    const centerArr = [pivotEle];
    while (arr.length) {
      const currentEle = arr.shift();
      if (currentEle.val === pivotEle.val) {
        centerArr.push(currentEle);
      } else if (currentEle.val < pivotEle.val) {
        leftArr.push(currentEle);
      } else {
        rightArr.push(currentEle);
      }
      //   history[0] = JSON.parse(JSON.stringify(leftArr));
      //   history[1] = JSON.parse(JSON.stringify(centerArr));
      //   history[2] = JSON.parse(JSON.stringify(rightArr));
      history.list[0] = leftArr;
      history.list[1] = centerArr;
      history.list[2] = rightArr;
      let quickList = this.state.quickSortHistory;
      quickList.push(JSON.parse(JSON.stringify(history)));
      this.setState({
        quickSortHistory: quickList
      });
      //   console.log(history, "history");
    }

    const leftArrSorted = this.quickSort(leftArr, level + 1, "left");
    const rightArrSorted = this.quickSort(rightArr, level + 1, "right");
    return leftArrSorted.concat(centerArr, rightArrSorted);
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
    let renderLeft = () => {
      let list = JSON.parse(JSON.stringify(this.state.leftArr));
      console.log(list, "left");
      return renderQuickItem(list);
    };
    let renderCenter = () => {
      let list = JSON.parse(JSON.stringify(this.state.centerArr));
      return renderQuickItem(list);
    };
    let renderRight = () => {
      let list = JSON.parse(JSON.stringify(this.state.rightArr));
      return renderQuickItem(list);
    };
    let renderQuickItem = list => {
      return list.map((item, index) => {
        let style = {
          left: index * 50 + "px"
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
      <div className="quick-container">
        <ul className="list">{renderItem()}</ul>
        <ul className="list list-show">
          <fieldset>
            <legend>left arr</legend>
            {renderLeft()}
          </fieldset>
          <fieldset>
            <legend>center arr</legend>
            {renderCenter()}
          </fieldset>
          <fieldset>
            <legend>right arr</legend>
            {renderRight()}
          </fieldset>
        </ul>
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
