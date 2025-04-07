"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const course_service_1 = require("./course.service");
const http_status_1 = __importDefault(require("http-status"));
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_service_1.CourseService.createCourse(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK, message: 'Course created Successfully', data: course,
        success: true
    });
});
const getCourses = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield course_service_1.CourseService.getAllCourses();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK, message: 'All Courses fetched Successfully', data: courses,
        success: true
    });
});
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_service_1.CourseService.getCourseById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK, message: 'Course fetched Successfully', data: course,
        success: true
    });
});
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_service_1.CourseService.updateCourse(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK, message: 'Course updated Successfully', data: course,
        success: true
    });
});
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_service_1.CourseService.deleteCourse(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK, message: 'Course deleted Successfully', data: result,
        success: true
    });
});
exports.CourseController = {
    deleteCourse,
    updateCourse,
    getCourses,
    createCourse,
    getCourseById
};
