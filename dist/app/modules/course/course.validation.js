"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseValidation = void 0;
const zod_1 = require("zod");
const createCourseZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        thumbnail: zod_1.z.string().url(),
        price: zod_1.z.number(),
        description: zod_1.z.string(),
    }),
});
const UpdateCourseZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().url().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
    }),
});
exports.CourseValidation = {
    UpdateCourseZodSchema,
    createCourseZodSchema
};
