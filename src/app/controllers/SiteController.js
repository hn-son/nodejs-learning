const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // GET /
  async showHome(req, res, next) {
    await Course.find({})
      .then((courses) =>
        res.render("home", { courses: multipleMongooseToObject(courses) })
      )
      .catch(next);
    // res.render("home");
  }

  // GET /search
  showSearch(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
