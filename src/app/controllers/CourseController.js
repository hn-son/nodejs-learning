const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // GET /
  async show(req, res, next) {
    // res.render("course");
    await Course.findOne({ slug: req.params.slug })
      .then((c) => res.render("courses/show", {course: mongooseToObject(c)}))
      .catch(next);
  }
}

module.exports = new CourseController();
