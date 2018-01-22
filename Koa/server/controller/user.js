const userService = require("../service/user");
const model = require("../model/user");
const App = require("./app");
const jwt = require("jsonwebtoken");
class User extends App {
  async login(ctx) {
    let content = ctx.request.body;
    // model.save({
    //   username: content.userName,
    //   password: content.password
    // });
    const res = await userService.login({
      username: content.userName,
      password: content.password
    });
    if (res.length > 0) {
      const token = jwt.sign({ name: content.userName }, "auth", {
        expiresIn: 60 * 60
      });
      ctx.body = {
        ctx: ctx,
        result: true,
        message: "登陆成功",
        token: token
      };
    } else {
      ctx.body = {
        result: false,
        message: "登陆失败"
      };
    }
  }
  async register(ctx) {
    let content = ctx.request.body;
    const res = await userService.register({
      username: content.username,
      password: content.password,
      email: content.email
    });
    console.log("controller-res:" + res);
    ctx.body = res;
  }
}
module.exports = new User();
