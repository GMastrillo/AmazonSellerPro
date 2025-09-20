import { Router } from 'express';
import {
  getAllCourses,
  getCourseById,
  getCourseContent,
} from '../controllers/course.controller';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.get('/:courseId/content', protect, getCourseContent);

export default router;
