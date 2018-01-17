import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
// axios({
//     method:'POST',
//     url:'//:127.0.0.1:3000/login',
//     data:{name:'asdasd'}
// }).then(function(res){
//     console.log(res);
// })

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};
render(AppRouter);
