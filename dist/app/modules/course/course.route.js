"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const user_utils_1 = require("../User/user.utils");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const course_validation_1 = require("./course.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), (0, validateRequest_1.default)(course_validation_1.CourseValidation.createCourseZodSchema), course_controller_1.CourseController.createCourse);
router.get('/', course_controller_1.CourseController.getCourses);
router.get('/:id', course_controller_1.CourseController.getCourseById);
router.patch('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), (0, validateRequest_1.default)(course_validation_1.CourseValidation.UpdateCourseZodSchema), course_controller_1.CourseController.updateCourse);
router.delete('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), course_controller_1.CourseController.deleteCourse);
exports.CourseRoutes = router;
