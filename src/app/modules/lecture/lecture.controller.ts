import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { LectureService } from './lecture.service';


 const createLecture = async (req: Request, res: Response) => {
  const lecture = await LectureService.createLecture(req.body);
  sendResponse(res, {
      statusCode: 201, message: 'Lecture created Successfully', data: lecture,
      success: true,
  });
};

 const getLectures = async (_req: Request, res: Response) => {
  const lectures = await LectureService.getAllLectures();
  sendResponse(res, {
      statusCode: 200, message: 'All lectures fetched Successfully', data: lectures,
      success: true,
  });
};

 const getLectureById = async (req: Request, res: Response) => {
  const lecture = await LectureService.getLectureById(req.params.id);
  sendResponse(res, {
      statusCode: 200, message: 'Lecture fetched Successfully', data: lecture,
      success: true,
  });
};

 const getLecturesByModule = async (req: Request, res: Response) => {
  const lectures = await LectureService.getLecturesByModuleId(req.params.moduleId);
  sendResponse(res, {
      statusCode: 200, message: 'Lectures by module fetched Successfully', data: lectures,
      success: true,
  });
};

 const updateLecture = async (req: Request, res: Response) => {
  const lecture = await LectureService.updateLecture(req.params.id, req.body);
  sendResponse(res, {
      statusCode: 200, message: 'Lecture updated Successfully', data: lecture,
      success: true,
  });
};

 const deleteLecture = async (req: Request, res: Response) => {
  const result = await LectureService.deleteLecture(req.params.id);
  sendResponse(res, {
      statusCode: 200, message: 'Lecture deleted Successfully', data: result,
      success: true,
  });
};
export const LectureController = {
    createLecture,
    getLectureById,
    getLectures,
    getLecturesByModule,
    updateLecture,
    deleteLecture
}