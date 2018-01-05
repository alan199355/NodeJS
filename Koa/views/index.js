import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./src/App";
import Calculator from "./src/TemperatureInput";
import Login from "./src/Login";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  hasHistory
} from "react-router-dom";

// axios({
//     method:'POST',
//     url:'//:127.0.0.1:3000/login',
//     data:{name:'asdasd'}
// }).then(function(res){
//     console.log(res);
// })

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
 
  <HashRouter history={hasHistory}>
     <div>
      <Route path="/" component={App} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/login" component={Login} />
     </div>
  </HashRouter>,
  document.getElementById("root")
);
