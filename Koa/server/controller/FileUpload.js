const fs = require("fs");
const path = require("path");
const App = require("./app");
const service = require("../service/FileUpload");
class FileUpload extends App {
  async readFile(ctx) {
    const res = await service.readFile();
    console.log('controller res:   '+res);
    ctx.body = ctx;
  }
}


module.exports = new FileUpload();
