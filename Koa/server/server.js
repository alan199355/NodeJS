const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const router = require("./router");
const config = require("./config/config");
const mongoose = require("mongoose");
const { host, database, port } = config.db;

// 数据库
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/yeqiang');

// 静态资源
app.use(serve(__dirname + "/views"));
// 跨域
app.use(
  cors({
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);
app.use(bodyParser());
// 路由
app.use(router.routes()).use(router.allowedMethods());

try {
  app.listen(3012);  
} catch (error) {
  console.log(error)
}

console.log("app started at port 3012");
console.log(config);
