import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  componentDidMount(){
    this.timerID=setInterval(
      ()=>this.tick(),1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return(
      <div>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state={isToggleOn:true};
    //this.handleClick=this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(prevState=>({
      isToggleOn:!prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    )
  }
}

class App extends Component {
  render() {
    function Welcome(props){
      return <h1>Hello,{props.name}</h1>
    }
    return (
      <div className="App">        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock />
        <Toggle />
        <Welcome name="alan" />
      </div>
    );
  }
}

export default App;
