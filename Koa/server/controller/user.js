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
      const token = jwt.sign({
          name: content.userName
        },
        "auth", {
          expiresIn: 60 * 60
        }
      );
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
  async getUserInfo(ctx) {
    let result = {
      success: true,
      message: "get"
    };
    await jwt.verify(ctx.headers.authorization, "auth", function (err, res) {
      if (err) {
        result.isVerify = false;
      } else {
        result.isVerify = true;
      }
    });
    ctx.response.status = 201;
    console.log(__dirname);
    ctx.body = result;
  }
  async getUserList(ctx) {
    const res = await userService.getUserList()
    ctx.body = res
  }
  async deleteUser(ctx) {
    let content = ctx.request.body
    let _id = content.id
    console.info('controller:'+_id)
    const res = await userService.deleteUser(_id)
    if(res.n===0){
      ctx.body = {
        success:true,
        message:'删除失败'
      }
    } else {
      ctx.body = {
        success:true,
        message:'删除成功'
      }
    }
    
  }
}
module.exports = new User();