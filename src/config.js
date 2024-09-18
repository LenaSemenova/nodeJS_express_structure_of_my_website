const config = {
    allowedOrigin: "*",
    port: process.env.PORT || 5002,
    dbPath: process.env.DB_PATH || "./database.db"
}

export default config;