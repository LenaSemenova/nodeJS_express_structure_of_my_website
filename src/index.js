import express from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import config from "./config.js";
import router from "./router.js";
import { openDBConnection, closeDBConnection } from "./db_services/sqlite.js";


const app = express();

app.use(
    cors({
        origin: config.allowedOrigin
        })
    )

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

openDBConnection(config.dbPath).then(() => {
    console.log("Database connection is established!");
    app.listen(config.port, () => {
        console.log("Server is ready for requests!");
    })

})
.catch((err) => {
    console.log("An error occurred while establishing DB connection: " + err);
    process.exit(1);
})

process.on('SIGINT', async() => {
    try {
        console.log("Serving is closing...");
        await closeDBConnection();
        process.exit(0);
        } catch {
        console.log("An error occurred while closing the server: " + err);
        process.exit(1);
        }
})
