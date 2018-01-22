import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import Calculator from "./src/TemperatureInput";
import Login from "./src/Auth/Login/Login";
import Register from "./src/Auth/Register/Register";
import GetUserInfo from "./src/UserInfo/GetUserInfo/GetUserInfo";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  hasHistory,
  IndexRoute,
  Switch
} from "react-router-dom";
import AddToken from "./src/Auth/container/test";

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter history={hasHistory}>
        <Switch>
          <Route path="/app" component={App} />
          <Route path="/calculator" component={Calculator} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/getUserInfo" component={GetUserInfo} />
        </Switch>
      </HashRouter>
    );
  }
}
export default AppRouter;
