"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const mongoose_1 = require("mongoose");
const moduleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    moduleNumber: { type: Number, required: true },
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course', required: true },
    lectures: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Lecture' }],
}, {
    timestamps: true,
});
exports.Modules = (0, mongoose_1.model)('Modules', moduleSchema);
