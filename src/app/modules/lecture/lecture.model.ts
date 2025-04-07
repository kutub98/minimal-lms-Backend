import { Schema, model } from 'mongoose';
import type { ILecture } from './lecture.interface';


const lectureSchema = new Schema<ILecture>({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  pdfs: [{ type: String }], // Array of file URLs
  moduleId: { type: Schema.Types.ObjectId, ref: 'Modules', required: true },
}, {
  timestamps: true,
});

export const Lectures = model<ILecture>('Lecture', lectureSchema);
