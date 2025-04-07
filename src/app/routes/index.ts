import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { CourseRoutes } from '../modules/course/course.route';
import { LectureRoute } from '../modules/lecture/lecture.route';
import { ModuleRoutes } from '../modules/module/module.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/courses',
    route:CourseRoutes
  },
  {
    path: '/modules',
    route: ModuleRoutes,
  },
  {
    path: '/lectures',
    route: LectureRoute
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
