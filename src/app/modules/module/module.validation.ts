import { z } from 'zod';

export const createModuleZodSchema = z.object({
  body: z.object({
    title: z.string(),
    moduleNumber: z.number(),
    courseId: z.string(),
  }),
});

export const updateModuleZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    moduleNumber: z.number().optional(),
    courseId: z.string().optional(),
  }),
});
