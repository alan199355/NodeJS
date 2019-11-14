import React from "react";
import { Button } from "antd";
import "./BubbleSort.scss";
class BubbleSort extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    this.randomList = this.randomList.bind(this);
  }
  randomList() {
    console.log("test");
  }
  render() {
    let renderItem = () => {
      return this.state.list.map(item => {
        return <li>{item}</li>;
      });
    };
    return (
      <div className="bubble-container">
        <ul className="list">{renderItem()}</ul>
        <Button onClick={this.randomList} type="primary">
          Random
        </Button>
      </div>
    );
  }
}
export default BubbleSort;
