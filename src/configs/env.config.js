import dotenv from 'dotenv';

// configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config();

const config = {
    env: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    timezone: process.env.APP_TIMEZONE,
    debug: process.env.APP_DEBUG,
    db: {
        server: process.env.DB_SERVER,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        debug: process.env.DB_DEBUG,
    },
    mail: {
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        fromEmail: process.env.MAIL_FROM_EMAIL,
        nameName: process.env.MAIL_FROM_NAME,
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        expire: process.env.JWT_EXPIRE,
    }
}

export default config;