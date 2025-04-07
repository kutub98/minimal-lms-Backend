import { Modules } from "../module/module.model";
import type { ILecture } from "./lecture.interface";
import { Lectures } from "./lecture.model";



const createLecture = async (data: ILecture) => {
  // 1. Check if the module exists
  const moduleExists = await Modules.findById(data.moduleId);
  if (!moduleExists) {
    throw new Error('Module not found');
  }

  // 2. Create the lecture
  const lecture = await Lectures.create(data);

  // 3. Push the lecture ID into module.lectures[]
  await Modules.findByIdAndUpdate(data.moduleId, {
    $push: { lectures: lecture._id }
  });

  return lecture;
};


// const createLecture = async (data: ILecture) => {
//   const lecture = await Lectures.create(data);
  
//   // push the new lecture ID to Module.lectures[]
//   await Modules.findByIdAndUpdate(lecture.moduleId, {
//     $push: { lectures: lecture._id }
//   });

//   return lecture;
// };


 const getAllLectures = async () => {
  return await Lectures.find().populate('moduleId');
};

 const getLectureById = async (id: string) => {
  return await Lectures.findById(id).populate('moduleId');
};

 const getLecturesByModuleId = async (moduleId: string) => {
  return await Lectures.find({ moduleId });
};

 const updateLecture = async (id: string, data: Partial<ILecture>) => {
  return await Lectures.findByIdAndUpdate(id, data, { new: true });
};

 const deleteLecture = async (id: string) => {
  return await Lectures.findByIdAndDelete(id);
};
export const LectureService = {
    createLecture,
    getAllLectures,
    getLectureById,
    getLecturesByModuleId,
    updateLecture,
    deleteLecture
}
