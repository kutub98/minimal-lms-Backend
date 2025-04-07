import { Request, Response } from 'express';
import { ModuleService } from './module.service';
import sendResponse from '../../utils/sendResponse';


 const createModule = async (req: Request, res: Response) => {
  const module = await ModuleService.createModule(req.body);
  sendResponse(res, {
      statusCode: 201, message: 'Module created', data: module,
      success: false
  });
};

 const getModules = async (_req: Request, res: Response) => {
  const modules = await ModuleService.getAllModules();
  sendResponse(res, {
      statusCode: 200, message: 'Modules fetched', data: modules,
      success: false
  });
};

 const getModuleById = async (req: Request, res: Response) => {
  const module = await ModuleService.getModuleById(req.params.id);
  sendResponse(res, {
      statusCode: 200, message: 'Module fetched', data: module,
      success: false
  });
};

 const getModulesByCourse = async (req: Request, res: Response) => {
  const modules = await ModuleService.getModulesByCourseId(req.params.courseId);
  sendResponse(res, {
      statusCode: 200, message: 'Modules for course fetched', data: modules,
      success: false
  });
};

 const updateModule = async (req: Request, res: Response) => {
  const module = await ModuleService.updateModule(req.params.id, req.body);
  sendResponse(res, {
      statusCode: 200, message: 'Module updated', data: module,
      success: false
  });
};

 const deleteModule = async (req: Request, res: Response) => {
  const result = await ModuleService.deleteModule(req.params.id);
  sendResponse(res, {
      statusCode: 200, message: 'Module deleted', data: result,
      success: false
  });
};
export const ModuleController = {  
    createModule,
    getModuleById,
    getModules,
    getModulesByCourse,
    updateModule,
    deleteModule
};

