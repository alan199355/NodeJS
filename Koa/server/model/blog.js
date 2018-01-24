const mongoose = require("mongoose");
const Blog = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  creation: {
    type: Date
  },
  modify: {
    type: Date
  }
});
