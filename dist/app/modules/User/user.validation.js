"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = exports.updateUserValidationSchema = exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        role: zod_1.z.enum(['admin', 'user']).optional(),
        img: zod_1.z.string().optional(), // Updated to match schema
    }),
});
exports.updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.enum(['admin', 'user']).optional(),
        img: zod_1.z.string().optional(), // Updated to match schema
    }),
});
exports.UserValidations = {
    createUserValidationSchema: exports.createUserValidationSchema,
    updateUserValidationSchema: exports.updateUserValidationSchema,
};
