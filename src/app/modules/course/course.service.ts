import { Lectures } from "../lecture/lecture.model";
import { Modules } from "../module/module.model";
import type { ICourse } from "./course.interface";
import { Course } from "./course.model";


 const createCourse = async (data: ICourse) => {
  return await Course.create(data);
};


const getAllCourses = async () => {
  return await Course.find()
    .populate({
      path: 'modules',
      populate: {
        path: 'lectures',
        model: 'Lecture',
      }
    });
};


// const getAllCourses = async () => {
//   return await Course.find()
//     .populate({
//       path: 'modules',
//       populate: {
//         path: 'lectures',
//         model: 'Lecture', // ✅ Correct model name (was 'Lectures')
//       }
//     });
// };




//  const getCourseById = async (id: string) => {
//   return await Course.findById(id).populate('modules');
// };


const getCourseById = async (courseId: string) => {
  const course = await Course.findById(courseId)
    .populate({
      path: 'modules',
      populate: {
        path: 'lectures',
      },
    });

  return course;
};

 const updateCourse = async (id: string, data: Partial<ICourse>) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

// const deleteCourse = async (id: string) => {
//   return await Course.findByIdAndDelete(id);
// };



const deleteCourse = async (courseId: string) => {
  // 1. Find all modules of the course
  const modules = await Modules.find({ courseId });

  // 2. For each module, delete its lectures
  for (const module of modules) {
    await Lectures.deleteMany({ moduleId: module._id });
  }

  // 3. Delete all modules of the course
  await Modules.deleteMany({ courseId });

  // 4. Finally, delete the course itself
  return await Course.findByIdAndDelete(courseId);
};


export const CourseService = {
    deleteCourse,
    updateCourse,
    getCourseById,
    getAllCourses,
    createCourse
};