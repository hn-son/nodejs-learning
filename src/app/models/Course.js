const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: String,
    desc: String,
    slug: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
