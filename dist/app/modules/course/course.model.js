"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    modules: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Modules' }],
    // lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]
    // lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]
}, {
    timestamps: true,
});
exports.Course = (0, mongoose_1.model)('Course', courseSchema);
