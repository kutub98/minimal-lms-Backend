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
exports.LectureService = void 0;
const module_model_1 = require("../module/module.model");
const lecture_model_1 = require("./lecture.model");
const createLecture = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Check if the module exists
    const moduleExists = yield module_model_1.Modules.findById(data.moduleId);
    if (!moduleExists) {
        throw new Error('Module not found');
    }
    // 2. Create the lecture
    const lecture = yield lecture_model_1.Lectures.create(data);
    // 3. Push the lecture ID into module.lectures[]
    yield module_model_1.Modules.findByIdAndUpdate(data.moduleId, {
        $push: { lectures: lecture._id }
    });
    return lecture;
});
// const createLecture = async (data: ILecture) => {
//   const lecture = await Lectures.create(data);
//   // push the new lecture ID to Module.lectures[]
//   await Modules.findByIdAndUpdate(lecture.moduleId, {
//     $push: { lectures: lecture._id }
//   });
//   return lecture;
// };
const getAllLectures = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield lecture_model_1.Lectures.find().populate('moduleId');
});
const getLectureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lecture_model_1.Lectures.findById(id).populate('moduleId');
});
const getLecturesByModuleId = (moduleId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lecture_model_1.Lectures.find({ moduleId });
});
const updateLecture = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lecture_model_1.Lectures.findByIdAndUpdate(id, data, { new: true });
});
const deleteLecture = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lecture_model_1.Lectures.findByIdAndDelete(id);
});
exports.LectureService = {
    createLecture,
    getAllLectures,
    getLectureById,
    getLecturesByModuleId,
    updateLecture,
    deleteLecture
};
