const Router = require("koa-router");
const router = new Router();
const user = require("./controller/user");
const fileUpload = require("./controller/FileUpload");
const OSS = require('ali-oss');
const client = new OSS({
  region:'oss-cn-beijing',
  accessKeyId:'LTAI5yADpOLfg8Lg',
  accessKeySecret:'rUTOyTTFW5Hbl0ooGqAUFu2O5PN9xZ'
})
const co = require('co');
const routerMap = [
  ["post", "/api/auth/login", user, "login"],
  ["post", "/api/auth/register", user, "register"],
  ["post", "/api/auth/getUserInfo", user, "getUserInfo"],
  ["post", "/api/upload", fileUpload, "readFile"]
];
routerMap.map(route => {
  const [method, path, controller, action] = route
  router[method](path, async (ctx, next) =>
    controller[action].bind(Object.assign(controller, { ctx }))(ctx, next)
  );
});
// router.post("/api/upload",async function(ctx,next) {
//   const file=ctx.request.body.files;
//   let date=new Date();
//   let time=''+date.getFullYear()+date.getMonth()+1+date.getDate();
//   let filepath=time+'/'+date.getTime();
//   let fileext=file.file.name.split('.')[1]
//   let upfile=file.file.path
//   let newfile=filepath+'.'+fileext
//   client.useBucket('yeqiang')
//   try {
//     let res=await client.put(newfile,upfile)
//     ctx.response.type='json'
//     ctx.response.body={
//       url:res.url
//     }
//     next()
//   } catch (error) {
//     console.log(error)
//   }
  
 
// });
module.exports = router;
