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
exports.LectureController = void 0;
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const lecture_service_1 = require("./lecture.service");
const createLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_service_1.LectureService.createLecture(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201, message: 'Lecture created Successfully', data: lecture,
        success: true,
    });
});
const getLectures = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lectures = yield lecture_service_1.LectureService.getAllLectures();
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'All lectures fetched Successfully', data: lectures,
        success: true,
    });
});
const getLectureById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_service_1.LectureService.getLectureById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Lecture fetched Successfully', data: lecture,
        success: true,
    });
});
const getLecturesByModule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lectures = yield lecture_service_1.LectureService.getLecturesByModuleId(req.params.moduleId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Lectures by module fetched Successfully', data: lectures,
        success: true,
    });
});
const updateLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lecture = yield lecture_service_1.LectureService.updateLecture(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Lecture updated Successfully', data: lecture,
        success: true,
    });
});
const deleteLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lecture_service_1.LectureService.deleteLecture(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Lecture deleted Successfully', data: result,
        success: true,
    });
});
exports.LectureController = {
    createLecture,
    getLectureById,
    getLectures,
    getLecturesByModule,
    updateLecture,
    deleteLecture
};
