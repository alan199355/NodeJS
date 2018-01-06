import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import Calculator from "./src/TemperatureInput";
import Login from "./src/Auth/Login/Login";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  hasHistory
} from "react-router-dom";

class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HashRouter history={hasHistory}>
                <div>
                <Route path="/app" component={App} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        )
    }
}
export default AppRouter