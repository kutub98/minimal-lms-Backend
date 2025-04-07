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
exports.ModuleService = void 0;
const course_model_1 = require("../course/course.model");
const module_model_1 = require("./module.model");
// const createModule = async (data: IModule) => {
//   const module = await Modules.create(data);
//   // push the new module ID to Course.modules[]
//   await Course.findByIdAndUpdate(module.courseId, {
//     $push: { modules: module._id }
//   });
//   return module;
// };
const createModule = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Check if the course exists
    const courseExists = yield course_model_1.Course.findById(data.courseId);
    if (!courseExists) {
        throw new Error('Course not found');
    }
    // 2. Create the module
    const module = yield module_model_1.Modules.create(data);
    // 3. Push the module ID into course.modules[]
    yield course_model_1.Course.findByIdAndUpdate(data.courseId, {
        $push: { modules: module._id },
    });
    return module;
});
//  const getAllModules = async () => {
//   return await Modules.find().populate('lectures');
// };
// const getAllModules = async () => {
//   return await Modules.find()
//     .populate('courseId') // ✅ populates parent course
//     .populate('lectures'); // ✅ populates all lectures of the module
// };
const getAllModules = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield module_model_1.Modules.find()
        .populate('courseId')
        .populate('lectures');
});
const getModuleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield module_model_1.Modules.findById(id).populate('lectures');
});
//  const getModulesByCourseId = async (courseId: string) => {
//   return await Modules.find({ courseId }).populate('lectures');
// };
const getModulesByCourseId = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield module_model_1.Modules.find({ courseId })
        .populate('courseId')
        .populate('lectures');
});
const updateModule = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield module_model_1.Modules.findByIdAndUpdate(id, data, { new: true });
});
const deleteModule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield module_model_1.Modules.findByIdAndDelete(id);
});
exports.ModuleService = {
    createModule,
    getAllModules,
    getModuleById,
    getModulesByCourseId,
    updateModule,
    deleteModule
};
