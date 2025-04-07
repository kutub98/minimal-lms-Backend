"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLectureZodSchema = exports.createLectureZodSchema = void 0;
const zod_1 = require("zod");
exports.createLectureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        videoUrl: zod_1.z.string().url(),
        pdfs: zod_1.z.array(zod_1.z.string().url()).optional(),
        moduleId: zod_1.z.string(),
    }),
});
exports.updateLectureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        videoUrl: zod_1.z.string().url().optional(),
        pdfs: zod_1.z.array(zod_1.z.string().url()).optional(),
        moduleId: zod_1.z.string().optional(),
    }),
});
