const service = require("../service/login");
const model = require("../model/login");
const App = require("./app");
class Login extends App {
  async login(ctx) {
    let content = ctx.request.body;
    // model.save({
    //   username: content.userName,
    //   password: content.password
    // });
    ctx.body = content;
  }
}
module.exports = new Login();
