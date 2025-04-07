import express from 'express';
import { CourseController } from './course.controller';
import { USER_ROLE } from '../User/user.utils';
import auth from '../../middlewares/auth';
import { CourseValidation } from './course.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), validateRequest(CourseValidation.createCourseZodSchema), CourseController.createCourse);
router.get('/', CourseController.getCourses);
router.get('/:id', CourseController.getCourseById);
router.patch('/:id', auth(USER_ROLE.admin), validateRequest(CourseValidation.UpdateCourseZodSchema), CourseController.updateCourse);
router.delete('/:id', auth(USER_ROLE.admin), CourseController.deleteCourse);

export const CourseRoutes = router;
