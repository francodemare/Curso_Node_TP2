// ESTAN TODAS LAS CONSTANTES DE LA API EN ESTE ARCHIVO
require('dotenv').config() // importar dotenv para obtener las variables de entorno

module.exports = {
    PORT_SERVER: process.env.PORT_SERVER || 5000,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    MAX_FILE_SIZE: 20 * 1024 * 1024, // 20MB
    JWT_SECRET: process.env.JWT_SECRET
}


