import express from 'express';
import { LectureController } from './lecture.controller';
import { USER_ROLE } from '../User/user.utils';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createLectureZodSchema, updateLectureZodSchema } from './lecture.validation';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), validateRequest(createLectureZodSchema), LectureController.createLecture);
router.get('/', LectureController.getLectures);
router.get('/:id', LectureController.getLectureById);
router.get('/module/:moduleId', LectureController.getLecturesByModule);
router.patch('/:id',auth(USER_ROLE.admin), validateRequest(updateLectureZodSchema), LectureController.updateLecture);
router.delete('/:id', auth(USER_ROLE.admin), LectureController.deleteLecture);

export const LectureRoute = router;
