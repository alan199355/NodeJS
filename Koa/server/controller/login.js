const service = require("../service/login");
const App = require("./app");
class Login extends App {
  async login(ctx) {
    let content = ctx.request.body;
    ctx.body = content;
  }
}
module.exports = new Login();
