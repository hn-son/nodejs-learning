const mongoose = require("mongoose");
// mongoose.createConnection("mongodb://localhost:27017/education_dev");
async function connect() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/education_dev")
    .then(() => console.log("Connected"))
    .catch(() => console.log("Failed"));
}

module.exports = { connect };
