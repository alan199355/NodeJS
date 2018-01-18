import { appData } from "./home/reducer";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

let store = createStore(combineReducers({ appData }), applyMiddleware(thunk));

export default store;
