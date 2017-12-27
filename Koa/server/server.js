const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
// 静态资源
app.use(serve(__dirname + "../views"));
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

router.post("/login", async (ctx, next) => {
  let content = ctx.request.body.name;
  ctx.body = { result: "success" };
  ctx.result = { result: "success" };
  return { result: "success" };
});

app.listen(3000);
console.log("app started at port 3000");
