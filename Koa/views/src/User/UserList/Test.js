import React from "react";
import "./Test.scss";
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 1, name: "1", class: "1-1" },
        { id: 2, name: "2", class: "1-2" },
        { id: 3, name: "3", class: "1-3" },
        { id: 4, name: "4", class: "1-4" },
        { id: 5, name: "5", class: "2-1" },
        { id: 6, name: "6", class: "2-2" },
        { id: 7, name: "7", class: "2-3" },
        { id: 8, name: "8", class: "2-4" },
        { id: 9, name: "9", class: "3-1" },
        { id: 10, name: "10", class: "3-2" },
        { id: 11, name: "11", class: "3-3" },
        { id: 12, name: "12", class: "3-4" },
        { id: 13, name: "13", class: "4-1" },
        { id: 14, name: "14", class: "4-2" },
        { id: 15, name: "15", class: "4-3" },
        { id: 16, name: "16", class: "4-4" }
      ],
      resetList: [
        { id: 1, name: "1", class: "1-1" },
        { id: 2, name: "2", class: "1-2" },
        { id: 3, name: "3", class: "1-3" },
        { id: 4, name: "4", class: "1-4" },
        { id: 5, name: "5", class: "2-1" },
        { id: 6, name: "6", class: "2-2" },
        { id: 7, name: "7", class: "2-3" },
        { id: 8, name: "8", class: "2-4" },
        { id: 9, name: "9", class: "3-1" },
        { id: 10, name: "10", class: "3-2" },
        { id: 11, name: "11", class: "3-3" },
        { id: 12, name: "12", class: "3-4" },
        { id: 13, name: "13", class: "4-1" },
        { id: 14, name: "14", class: "4-2" },
        { id: 15, name: "15", class: "4-3" },
        { id: 16, name: "16", class: "4-4" }
      ]
    };
    this.randomArr = this.randomArr.bind(this);
    this.reset = this.reset.bind(this);
  }
  randomArr() {
    let arr = this.state.list;
    arr[0].class = "3-3";
    arr[10].class = "1-1";
    this.setState({
      list: arr
    });
  }
  reset() {
    let arr = this.state.resetList;
    this.setState({
      list: arr
    });
  }
  render() {
    let renderLi = () => {
      this.state.list.map(item => {
        console.log(item, "render");
        return <li>111</li>;
      });
    };
    return (
      <div className="container">
        <ul className="list">
          {this.state.list.map((item, index) => {
            let ind = index + 1;
            let y = (index % 4) + 1;
            let x = (index - (index % 4)) / 4 + 1;

            return (
              <li key={item.id} className={"li-" + item.class}>
                {x + "-" + y}
              </li>
            );
          })}
        </ul>
        <button onClick={this.randomArr}>test</button>
        <button className="reset" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}
export default Test;
