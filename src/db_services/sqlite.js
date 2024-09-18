import { open } from "sqlite";
import sqlite3 from "sqlite3";

export let db;

export const openDBConnection = async(path) => {
    db = await open({
        filename: path,
        driver: sqlite3.Database
    });
    db.migrate().catch((err) => {
        console.log("An error occurred while migrating: " + err);
    })

    return db;
}

export const closeDBConnection = async() => {
    if (db) await db.close();
}