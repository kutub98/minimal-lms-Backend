import { Document, Types } from 'mongoose';

export interface IModule extends Document {
  title: string;
  moduleNumber: number;
  courseId: Types.ObjectId;
  lectures: Types.ObjectId[];
}
