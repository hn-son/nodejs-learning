const express = require("express");
const handlebars = require("express-handlebars");
const route = require("./routes/index");
const db = require("./config/db");
const path = require("path");
const app = express();

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes
route(app);

app.listen(3000);
