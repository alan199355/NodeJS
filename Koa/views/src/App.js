import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from './TemperatureInput'


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
    function Blog(props) {
      const sidebar = (
        <ul>
          {props.posts.map((post) =>
            <li key={post.id}>
              {post.title}
            </li>
          )}
        </ul>
      );
      const content = props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      );
      return (
        <div>
          {sidebar}
          <hr />
          {content}
        </div>
      );
    }
    
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
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
        <Blog posts={posts} />,
        <Welcome name="alan" />
        <Calculator />
      </div>
    );
  }
}

export default App;
