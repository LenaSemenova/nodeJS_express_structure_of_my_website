import { postNewUsers } from "../users_db_models/users_new_db_model.js";

export const getAllUsers = async(req, res) => {
    
    let allUsers = await postNewUsers.getAllUsers();
    return res.status(200).json(allUsers);
}