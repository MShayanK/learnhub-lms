const express = require('express');
const router = express.Router();
const { 
  getCourses, 
  getCourseById, 
  createCourse, 
  updateCourse, 
  deleteCourse 
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCourses)
  .post(protect, authorize('Instructor', 'Admin'), createCourse);

router.route('/:id')
  .get(getCourseById)
  .put(protect, authorize('Instructor', 'Admin'), updateCourse)
  .delete(protect, authorize('Instructor', 'Admin'), deleteCourse);

module.exports = router;