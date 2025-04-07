"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_utils_1 = require("./user.utils");
const router = express_1.default.Router();
router.post('/', 
// auth(USER_ROLE.admin),
(0, validateRequest_1.default)(user_validation_1.createUserValidationSchema), user_controller_1.UserController.createUser);
router.get('/', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), user_controller_1.UserController.getAllUsers);
router.get('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user), user_controller_1.UserController.findUserById);
router.patch('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.updateUserValidationSchema), user_controller_1.UserController.updateUserById);
router.delete('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin), user_controller_1.UserController.deleteUserById);
exports.UserRoutes = router;
