import { z } from 'zod';

export const createLectureZodSchema = z.object({
  body: z.object({
    title: z.string(),
    videoUrl: z.string().url(),
    pdfs: z.array(z.string().url()).optional(),
    moduleId: z.string(),
  }),
});

export const updateLectureZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    videoUrl: z.string().url().optional(),
    pdfs: z.array(z.string().url()).optional(),
    moduleId: z.string().optional(),
  }),
});
