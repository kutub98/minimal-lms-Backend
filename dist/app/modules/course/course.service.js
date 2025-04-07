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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const lecture_model_1 = require("../lecture/lecture.model");
const module_model_1 = require("../module/module.model");
const course_model_1 = require("./course.model");
const createCourse = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield course_model_1.Course.create(data);
});
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield course_model_1.Course.find()
        .populate({
        path: 'modules',
        populate: {
            path: 'lectures',
            model: 'Lecture',
        }
    });
});
// const getAllCourses = async () => {
//   return await Course.find()
//     .populate({
//       path: 'modules',
//       populate: {
//         path: 'lectures',
//         model: 'Lecture', // ✅ Correct model name (was 'Lectures')
//       }
//     });
// };
//  const getCourseById = async (id: string) => {
//   return await Course.findById(id).populate('modules');
// };
const getCourseById = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.findById(courseId)
        .populate({
        path: 'modules',
        populate: {
            path: 'lectures',
        },
    });
    return course;
});
const updateCourse = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield course_model_1.Course.findByIdAndUpdate(id, data, { new: true });
});
// const deleteCourse = async (id: string) => {
//   return await Course.findByIdAndDelete(id);
// };
const deleteCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Find all modules of the course
    const modules = yield module_model_1.Modules.find({ courseId });
    // 2. For each module, delete its lectures
    for (const module of modules) {
        yield lecture_model_1.Lectures.deleteMany({ moduleId: module._id });
    }
    // 3. Delete all modules of the course
    yield module_model_1.Modules.deleteMany({ courseId });
    // 4. Finally, delete the course itself
    return yield course_model_1.Course.findByIdAndDelete(courseId);
});
exports.CourseService = {
    deleteCourse,
    updateCourse,
    getCourseById,
    getAllCourses,
    createCourse
};
