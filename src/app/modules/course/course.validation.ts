import { z } from 'zod';


 const createCourseZodSchema = z.object({
  body: z.object({
    title: z.string(),
    thumbnail: z.string().url(),
    price: z.number(),
    description: z.string(),
}),
});

 const UpdateCourseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    thumbnail: z.string().url().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
  }),
 });

export const CourseValidation = {
    UpdateCourseZodSchema,
    createCourseZodSchema
 }
