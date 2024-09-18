import { postNewUsers } from "../users_db_models/users_new_db_model.js";
import config from "../../../config.js";

export const addUsers = async(req, res) => {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;

    if (!name || !phoneNumber) return res.status(404).json({errorMessage: "NAME and PHONE NUMBER are REQUIRED!"});

    await postNewUsers.saveNewUser(name, phoneNumber);

    return res.redirect(`http://localhost:${config.port}/api/users/showAllUsers`);
} 