import { Router } from "express";
import healthController from "./main_routes/health_check/health_routes.js";
import addUsersController from "./main_routes/users/users_routes.js";
import getUserController from "./main_routes/users/users_routes.js";
const router = new Router();

router.use('/api/health', healthController);
console.log("HealthController is checked!");

router.use('/api/users', addUsersController);

router.use('/api/users', getUserController);

export default router;