const Router = require("koa-router");
const router = new Router();
const login = require("./controller/login");

const routerMap = [["post", "/api/auth/login", login, "login"]];
routerMap.map(route => {
  const [method, path, controller, action] = route;
  router[method](path, async (ctx, next) =>
    controller[action].bind(Object.assign(controller, { ctx }))(ctx, next)
  );
});
module.exports = router;
