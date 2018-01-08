const userService = require("../service/user");
const model = require("../model/user");
const App = require("./app");
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
    ctx.body = res;
  }
  async register(ctx) {
    let content = ctx.request.body;
    const res = await userService.register({
      username: content.username,
      password: content.password,
      email: content.email
    });
    console.log('controller-res:'+res);
    ctx.body = res;
  }
}
module.exports = new User();
