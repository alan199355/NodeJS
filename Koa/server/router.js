const Router = require("koa-router");
const router = new Router();
const user = require("./controller/user");
const fileUpload = require("./controller/FileUpload");


const routerMap = [
  ["post", "/api/auth/login", user, "login"],
  ["post", "/api/auth/register", user, "register"],
  ["post", "/api/auth/getUserInfo", user, "getUserInfo"],
  ["post", "/api/upload", fileUpload, "readFile"],
  ["get", "/api/user/getUserList", user, "getUserList"],
  ['get', '/api/user/deleteUser', user, 'deleteUser']
];
routerMap.map(route => {
  const [method, path, controller, action] = route
  router[method](path, async (ctx, next) =>
    controller[action].bind(Object.assign(controller, {
      ctx
    }))(ctx, next));
});

module.exports = router;