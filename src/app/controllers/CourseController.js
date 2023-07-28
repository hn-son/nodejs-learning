const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // GET /
  async show(req, res, next) {
    // res.render("course");
    await Course.findOne({ slug: req.params.slug })
      .then((c) => res.render("courses/show", { course: mongooseToObject(c) }))
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  async store(req, res, next) {
    const course = new Course(req.body);
    await Course.create(course).then(() => res.redirect(`/courses/${course.slug}`)).catch(next);
  }
}

module.exports = new CourseController();
