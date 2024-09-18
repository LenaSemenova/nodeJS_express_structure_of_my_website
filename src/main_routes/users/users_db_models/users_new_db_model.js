import { db } from "../../../db_services/sqlite.js";

export const postNewUsers = {
    saveNewUser: (name, phoneNumber) => {
        const sql = 'INSERT INTO users(name, phone_number) VALUES(?, ?)';
        return db.run(sql, name, phoneNumber);
    },
    getAllUsers: () => {
        const sql = 'SELECT * FROM users';
        return db.all(sql);
    }
}