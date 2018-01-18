import * as home from "./action-type";

// 保存登陆token
export const saveToken = value => {
  return {
    type: home.SAVETOKEN,
    value
  };
};
