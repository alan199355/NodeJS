import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './src/redux/reducers';
// axios({
//     method:'POST',
//     url:'//:127.0.0.1:3000/login',
//     data:{name:'asdasd'}
// }).then(function(res){
//     console.log(res);
// })
const store=createStore(counter);
class NavComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <div>{this.props.children}</div>
      </div>
    );
  }
}
class Test extends React.Component {
  render() {
    return <h1>adsdadasda</h1>;
  }
}
ReactDOM.render(
    <AppRouter></AppRouter>
  
  ,
  document.getElementById("root")
);
