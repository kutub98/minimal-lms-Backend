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
exports.ModuleController = void 0;
const module_service_1 = require("./module.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createModule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_service_1.ModuleService.createModule(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201, message: 'Module created', data: module,
        success: false
    });
});
const getModules = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modules = yield module_service_1.ModuleService.getAllModules();
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Modules fetched', data: modules,
        success: false
    });
});
const getModuleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_service_1.ModuleService.getModuleById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Module fetched', data: module,
        success: false
    });
});
const getModulesByCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modules = yield module_service_1.ModuleService.getModulesByCourseId(req.params.courseId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Modules for course fetched', data: modules,
        success: false
    });
});
const updateModule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const module = yield module_service_1.ModuleService.updateModule(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Module updated', data: module,
        success: false
    });
});
const deleteModule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield module_service_1.ModuleService.deleteModule(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200, message: 'Module deleted', data: result,
        success: false
    });
});
exports.ModuleController = {
    createModule,
    getModuleById,
    getModules,
    getModulesByCourse,
    updateModule,
    deleteModule
};
