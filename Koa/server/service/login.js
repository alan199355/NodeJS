const model = require("../model/login");
module.exports = {
  async login(obj) {
    const res = model.find(obj);
    return res;
  }
};
