"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/User/user.route");
const course_route_1 = require("../modules/course/course.route");
const lecture_route_1 = require("../modules/lecture/lecture.route");
const module_route_1 = require("../modules/module/module.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/courses',
        route: course_route_1.CourseRoutes
    },
    {
        path: '/modules',
        route: module_route_1.ModuleRoutes,
    },
    {
        path: '/lectures',
        route: lecture_route_1.LectureRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
