const Router = require("koa-router");
const router = new Router();
const user = require("./controller/user");
const body = require("koa-body");
const formidable = require("formidable");
const form = new formidable.IncomingForm();
const multer = require("koa-multer");
const upload = multer({ dest: "uploadss/" });
const type = upload.single("imgData");
const path=require('path');
const fileUpload = require("./controller/FileUpload");

// const routerMap = [
//   ["post", "/api/auth/login", user, "login"],
//   ["post", "/api/auth/register", user, "register"],
//   ["post", "/api/auth/getUserInfo", user, "getUserInfo"],
//   ["post", "/api/fileUpload", fileUpload, "readFile"]
// ];
// routerMap.map(route => {
//   const [method, path, controller, action] = route;
//   router[method](path, async (ctx, next) =>
//     controller[action].bind(Object.assign(controller, { ctx }))(ctx, next)
//   );
// });
router.post("/api/upload",async function(ctx) {
  const file=ctx.request.body.files;

  // form.uploadDir = path.join(__dirname + "/upload");
  // form.parse(ctx.req,function(err, fields, files) {
  //   if (err) throw err;
  // });
  ctx.body = file;
});
module.exports = router;
