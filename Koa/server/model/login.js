
// mongoose.connect("mongodb://localhost:27017/yeqiang");
// var db = mongoose.connection;
// db.on("error", function() {
//   console.log("error");
// });
// db.once("open", function() {
//   console.log("open");
// });
// let loginSchema = mongoose.Schema({
//   age: String
// });
// let login = mongoose.model("login", loginSchema);
// let ye = new login({ age: "24sfsdf" });
// ye.save(function(err, res) {
//   if (err) {
//     console.log("Error:" + err);
//   } else {
//     console.log("Res:" + res);
//   }
// });

const mongoose = require("mongoose");
const Login = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});
module.exports = mongoose.model("Login", Login);

