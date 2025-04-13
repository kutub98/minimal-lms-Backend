import { Schema, model } from 'mongoose';
import type { ICourse } from './course.interface';


const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  modules: [{ type: Schema.Types.ObjectId, ref: 'Modules' }],
  // lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]
// lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]

}, {
  timestamps: true,
});

export const Course = model<ICourse>('Course', courseSchema);
