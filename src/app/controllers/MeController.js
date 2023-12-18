const Course = require('../Models/Course');
const { mutipleToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.find(),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([course, countDelete]) =>
        res.render('me/stored-courses', {
          countDelete,
          courses: mutipleToObject(course),
        })
      )
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then(course =>
        res.render('me/trash-courses', {
          courses: mutipleToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
