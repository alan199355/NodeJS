import * as home from "./action-type";

let defaultState = {
  token: ""
};

export const appData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVETOKEN:
      return { val: action.value  };
    default:
      return state;
  }
};
