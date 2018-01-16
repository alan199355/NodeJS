import React from "react";
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
  IndexRoute
} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './src/redux/reducers';
const store=createStore(counter);

class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Provider  store={store}>
                <HashRouter history={hasHistory}>
                    <div>                
                    <Route path="/app" component={App} />
                    <Route path="/calculator" component={Calculator} />
                    <Route name="adasdasda" exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    </div>
                </HashRouter>
            </Provider>
           
        )
    }
}
export default AppRouter