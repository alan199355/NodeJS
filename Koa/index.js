const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
app.use(serve(__dirname + "/views"));
app.use(bodyParser());
app.use(router.routes());
router.post("/login", async (ctx, next) => {
  let content = ctx.request.body.name; 
  ctx.body = { result: "success" };
  return { result: "success" };
});

app.listen(3000);
console.log("app started at port 3000");
