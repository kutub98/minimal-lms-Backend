"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateModuleZodSchema = exports.createModuleZodSchema = void 0;
const zod_1 = require("zod");
exports.createModuleZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        moduleNumber: zod_1.z.number(),
        courseId: zod_1.z.string(),
    }),
});
exports.updateModuleZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        moduleNumber: zod_1.z.number().optional(),
        courseId: zod_1.z.string().optional(),
    }),
});
// model 
