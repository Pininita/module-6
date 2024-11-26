import dotenv from 'dotenv';
dotenv.config();

const env = {
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    },
    port: process.env.PORT || 4000
};

export default env; // Exporta el objeto config como default
