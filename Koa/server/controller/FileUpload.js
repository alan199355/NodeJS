const fs = require("fs");
const path = require("path");
const App = require("./app");
const OSS = require("ali-oss");
const client = new OSS({
  region: "",
  accessKeyId: "",
  accessKeySecret: ""
});
const co = require("co");
const service = require("../service/FileUpload");

class FileUpload extends App {
  async readFile(ctx) {
    const file = ctx.request.body.files;
    let date = new Date();
    let time = "" + date.getFullYear() + date.getMonth() + 1 + date.getDate();
    let filepath = time + "/" + date.getTime();
    let fileext = file.file.name.split(".")[1];
    let upfile = file.file.path;
    let newfile = filepath + "." + fileext;
    client.useBucket("yeqiang");
    try {
      let res = await client.put(newfile, upfile);
      ctx.response.type = "json";
      ctx.response.body = {
        url: res.url
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileUpload();
