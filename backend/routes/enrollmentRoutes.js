const express = require('express');
const router = express.Router();
const { enrollCourse, getMyEnrollments } = require('../controllers/enrollmentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('Student'), enrollCourse);
router.get('/my-courses', protect, authorize('Student'), getMyEnrollments);

module.exports = router;