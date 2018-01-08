const model = require("../model/user");
module.exports = {
  async login(obj) {
    const res = model.find(obj);
    return res;
  },
  async register(obj) {
    const registerModel = new model(obj);
    const res = await model
      .find(obj)
      .lean()
      .exec();
    if (res.length > 0) {
      const msg = { error: true, message: "用户名重复" };
      console.log(msg);
      return msg;
    } else {
      const registerRes = await registerModel.save();
      if (registerRes) {
        const msg = { success: true, message: "注册成功" };
        return msg;
      }
    }
  }
};
