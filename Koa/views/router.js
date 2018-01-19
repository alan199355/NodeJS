import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import Calculator from "./src/TemperatureInput";
import Login from "./src/Auth/Login/Login";
import Register from "./src/Auth/Register/Register";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  hasHistory,
  IndexRoute,
  Switch
} from "react-router-dom";


class AppRouter extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(            
            <HashRouter history={hasHistory}>
                <Switch>
                    <Route path="/app" component={App} />
                    <Route path="/calculator" component={Calculator} />
                    <Route value={'adasdasdas'} name="adasdasda" exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </HashRouter>            
           
        )
    }
}
export default AppRouter