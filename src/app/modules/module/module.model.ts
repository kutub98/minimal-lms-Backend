import { Schema, model } from 'mongoose';
import type { IModule } from './module.interface';


const moduleSchema = new Schema<IModule>({
  title: { type: String, required: true },
  moduleNumber: { type: Number, required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }],
}, {
  timestamps: true,
});

export const Modules = model<IModule>('Modules', moduleSchema);
