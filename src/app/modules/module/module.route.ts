import express from 'express';
import { ModuleController } from './module.controller';
import { USER_ROLE } from '../User/user.utils';
import validateRequest from '../../middlewares/validateRequest';
import { createModuleZodSchema } from './module.validation';
import auth from '../../middlewares/auth';
import { updateLectureZodSchema } from '../lecture/lecture.validation';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), validateRequest(createModuleZodSchema), ModuleController.createModule);
router.get('/', ModuleController.getModules);
router.get('/:id', ModuleController.getModuleById);
router.get('/course/:courseId', ModuleController.getModulesByCourse);
router.patch('/:id', auth(USER_ROLE.admin), validateRequest(updateLectureZodSchema), ModuleController.updateModule);
router.delete('/:id', auth(USER_ROLE.admin), ModuleController.deleteModule);

export const ModuleRoutes = router;
