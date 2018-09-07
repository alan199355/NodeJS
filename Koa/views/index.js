import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import store from "./src/store/store";

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <div>
          <Component value={1112222} />          
        </div>
        
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept()
}
render(AppRouter);
