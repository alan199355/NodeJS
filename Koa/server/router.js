const Router = require("koa-router");
const router = new Router();
const user = require("./controller/user");
const body = require("koa-body");
const formidable = require("formidable");
const multer = require("koa-multer");
const upload = multer({ dest: "uploadss/" });
const type = upload.single("imgData");
const path=require('path');
const fileUpload = require("./controller/FileUpload");
const OSS = require('ali-oss');
const client = new OSS({
  region:'oss-cn-beijing',
  accessKeyId:'LTAI5yADpOLfg8Lg',
  accessKeySecret:'rUTOyTTFW5Hbl0ooGqAUFu2O5PN9xZ'
})
const co = require('co');
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
router.post("/api/upload",async function(ctx,next) {
  const file=ctx.request.body.files;
  let alioss_upfile=function(){
    return new Promise(function(resolve,reject){
      const form=new formidable.IncomingForm();
      form.parse(ctx.req, function(err,fields,files) {
          if(err) throw err;
          let date=new Date();
          let time=''+date.getFullYear()+date.getMonth()+1+date.getDate();
          let filepath=time+'/'+date.getTime();
          let fileext=files.file.name.split('.');
          let upfile=files.file.path;
          let newfile=filepath+'.'+fileext[1];
          console.log(filepath);
          resolve(next());
          // co(function*(){
          //   client.useBucket('yeqiang');
          //   let res=yield client.put(newfile,upfile);
          //   ctx.response.type = 'json';
          //   ctx.response.body = result.url;
          //   resolve(next());
          // }).catch(function(err){
          //   reject(next());
          //   console.log(err)
          // })
      })
    })
  }
  await alioss_upfile();
 
 
});
module.exports = router;
