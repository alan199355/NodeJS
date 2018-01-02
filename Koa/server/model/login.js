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
