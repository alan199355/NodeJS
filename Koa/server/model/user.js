const mongoose = require("mongoose");
const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
});
module.exports = mongoose.model("User", User);
