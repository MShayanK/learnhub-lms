const express = require('express');
const router = express.Router();
const { getLessonsByCourse, createLesson } = require('../controllers/lessonController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/course/:courseId', protect, getLessonsByCourse);
router.post('/', protect, authorize('Instructor', 'Admin'), createLesson);

module.exports = router;