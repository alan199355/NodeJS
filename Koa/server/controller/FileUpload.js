const fs = require("fs");
const path = require("path");
const App = require("./app");
const formidable = require('formidable');
const OSS = require('ali-oss');
const client = new OSS({
  region:'oss-cn-beijing',
  accessKeyId:'LTAI5yADpOLfg8Lg',
  accessKeySecret:'rUTOyTTFW5Hbl0ooGqAUFu2O5PN9xZ'
})
const co = require('co');
const service = require("../service/FileUpload");

class FileUpload extends App {
  async readFile(ctx) {
    const res = await service.readFile();
    const form=new formidable.IncomingForm();
    form.parse(ctx.req,async function(err,fields,files) {
        if(err) throw err;
        let date=new Date();
        let time=''+date.getFullYear()+date.getMonth()+1+date.getDate();
        let filepath=time+'/'+date.getTime();
        let fileext=files.file.name.split('.');
        let upfile=files.file.path;
        let newfile=filepath+'.'+fileext[1];
        co(function*(){
          client.useBucket('yeqiang');
          let res=yield client.put(newfile,upfile);
          ctx.response.type = 'json';
          ctx.response.body = result.url;
          resolve(next());
        }).catch(function(err){
          console.log(err)
        })
    })
    ctx.body = ctx;
  }
}


module.exports = new FileUpload();
