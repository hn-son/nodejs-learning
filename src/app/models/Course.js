const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  desc: String,
  img: String,
  slug: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
