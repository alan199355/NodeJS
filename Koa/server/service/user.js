const model = require("../model/user");
module.exports = {
  async login(obj) {
    const res = await model.find(obj).exec();
    return res;
  },
  async register(obj) {
    const registerModel = new model(obj);
    const res = await model
      .find({
        username: obj.username
      })
      .exec();
    if (res.length > 0) {
      const msg = {
        error: true,
        message: "用户名重复"
      };
      return msg;
    } else {
      const registerRes = await registerModel.save();
      if (registerRes) {
        const msg = {
          success: true,
          message: "注册成功"
        };
        return msg;
      }
    }
  },
  async getUserList(obj) {
    const res = await model.find().exec()
    let response={
      list:res,
      totalCount:res.length
    }    
    return response
  },
  async deleteUser(_id) {
    console.log('id:'+_id)
    const res = await model.deleteOne({
      _id: _id
    })
    return res
  }
};