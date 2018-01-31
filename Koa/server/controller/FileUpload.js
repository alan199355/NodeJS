const fs = require("fs");
const path = require("path");
const App = require("./app");

const service = require("../service/FileUpload");

class FileUpload extends App {
  async readFile(ctx) {
    const res = await service.readFile();
    const form=new formidable.IncomingForm();
    form.parse(ctx.req,async function(err,fields,files) {
        if(err) throw err;
        
    })
    ctx.body = ctx;
  }
}


module.exports = new FileUpload();
