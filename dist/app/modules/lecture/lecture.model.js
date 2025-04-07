"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lectures = void 0;
const mongoose_1 = require("mongoose");
const lectureSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    pdfs: [{ type: String }],
    moduleId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Modules', required: true },
}, {
    timestamps: true,
});
exports.Lectures = (0, mongoose_1.model)('Lecture', lectureSchema);
