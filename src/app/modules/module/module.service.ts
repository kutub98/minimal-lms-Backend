import { Course } from "../course/course.model";
import type { IModule } from "./module.interface";
import { Modules } from "./module.model";





// const createModule = async (data: IModule) => {
//   const module = await Modules.create(data);
  
//   // push the new module ID to Course.modules[]
//   await Course.findByIdAndUpdate(module.courseId, {
//     $push: { modules: module._id }
//   });

//   return module;
// };

const createModule = async (data: IModule) => {
  // 1. Check if the course exists
  const courseExists = await Course.findById(data.courseId);
  if (!courseExists) {
    throw new Error('Course not found');
  }

  // 2. Create the module
  const module = await Modules.create(data);

  // 3. Push the module ID into course.modules[]
  await Course.findByIdAndUpdate(data.courseId, {
    $push: { modules: module._id },
  });

  return module;
};



//  const getAllModules = async () => {
//   return await Modules.find().populate('lectures');
// };

// const getAllModules = async () => {
//   return await Modules.find()
//     .populate('courseId') // ✅ populates parent course
//     .populate('lectures'); // ✅ populates all lectures of the module
// };
const getAllModules = async () => {
  return await Modules.find()
    .populate('courseId')
    .populate('lectures');
};


 const getModuleById = async (id: string) => {
  return await Modules.findById(id).populate('lectures');
};

//  const getModulesByCourseId = async (courseId: string) => {
//   return await Modules.find({ courseId }).populate('lectures');
// };

const getModulesByCourseId = async (courseId: string) => {
  return await Modules.find({ courseId })
    .populate('courseId')
    .populate('lectures');
};


 const updateModule = async (id: string, data: Partial<IModule>) => {
  return await Modules.findByIdAndUpdate(id, data, { new: true });
};

 const deleteModule = async (id: string) => {
  return await Modules.findByIdAndDelete(id);
};

 export const ModuleService = {
     createModule,
     getAllModules,
     getModuleById,
     getModulesByCourseId,
     updateModule,
     deleteModule
}