const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const router = require('./router');

// 静态资源
app.use(serve(__dirname + "/views"));
// 跨域
app.use(
  cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);
app.use(bodyParser());
// 路由
app.use(router.routes())
   .use(router.allowedMethods());



app.listen(3011);
console.log("app started at port 3011");
