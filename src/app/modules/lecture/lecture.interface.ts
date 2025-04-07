import { Document, Types } from 'mongoose';

export interface ILecture extends Document {
  title: string;
  videoUrl: string;
  pdfs?: string[];
  moduleId: Types.ObjectId;
}
