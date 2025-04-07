import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { CourseService } from './course.service';
import httpStatus from 'http-status';



const createCourse = async (req: Request, res: Response) => {
  const course = await CourseService.createCourse(req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK, message: 'Course created Successfully', data: course,
      success: true
  });
};

const getCourses = async (_req: Request, res: Response) => {
  const courses = await CourseService.getAllCourses();
  sendResponse(res, {
      statusCode: httpStatus.OK, message: 'All Courses fetched Successfully', data: courses,
      success: true
  });
};



const getCourseById = async (req: Request, res: Response) => {
  const course = await CourseService.getCourseById(req.params.id);
  sendResponse(res, {
      statusCode: httpStatus.OK, message: 'Course fetched Successfully', data: course,
      success: true
  });
};

const updateCourse = async (req: Request, res: Response) => {
  const course = await CourseService.updateCourse(req.params.id, req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK, message: 'Course updated Successfully', data: course,
      success: true
  });
};

const deleteCourse = async (req: Request, res: Response) => {
  const result = await CourseService.deleteCourse(req.params.id);
  sendResponse(res, {
      statusCode: httpStatus.OK, message: 'Course deleted Successfully', data: result,
      success: true
  });
};


export const CourseController = {
    deleteCourse,
    updateCourse, 
    getCourses,
    createCourse,
    getCourseById
}