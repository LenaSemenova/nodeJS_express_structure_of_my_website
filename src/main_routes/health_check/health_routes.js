import { Router } from "express";
import { health } from "./health_controller.js";

const router = new Router();

router.use('/', health);

export default router;