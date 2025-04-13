import { Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  modules: string[]; 
  // lectures: string[]
}
