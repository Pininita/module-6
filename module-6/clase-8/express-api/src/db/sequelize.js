import { sequelize } from 'sequelize';
import env from '../config/env.js';


const { database } = env;

console.log(database)
const sequelize = new Sequelize(database.databaseName, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    //logging: false,
});