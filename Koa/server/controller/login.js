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
    let test = new model({
      username: content.userName,
      password: content.password
    });
    test.save(function(err, res) {
      if (err) {
        console.log("Error:" + err);
      } else {
        console.log("Res:" + res);
      }
    });
    ctx.body = content;
  }
}
module.exports = new Login();
