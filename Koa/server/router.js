const Router = require("koa-router");
const router = new Router();
const user = require("./controller/user");

const routerMap = [
  ["post", "/api/auth/login", user, "login"],
  ["post", "/api/auth/register", user, "register"]
];
routerMap.map(route => {
  const [method, path, controller, action] = route;
  router[method](path, async (ctx, next) =>
    controller[action].bind(Object.assign(controller, { ctx }))(ctx, next)
  );
});
module.exports = router;
