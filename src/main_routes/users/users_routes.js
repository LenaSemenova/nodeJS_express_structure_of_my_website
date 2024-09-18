import { Router } from "express";
import { addUsers } from "./users_controllers/saveNewUser.js";
import { getAllUsers } from "./users_controllers/getAllUsers.js";

const router = new Router();

router.use('/addNewUsers', addUsers);
router.use('/showAllUsers', getAllUsers);

export default router;