import { Sequelize } from 'sequelize';
import env from '../config/env.js';


const { database } = env;

console.log(database)
const sequelize = new Sequelize(database.databaseName, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    //logging: false,
});

sequelize.query(`
CREATE TABLE IF NOT EXISTS artists (
    artist_id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    bio TEXT NOT NULL,
    photoUrl VARCHAR(255)
);
`).then(() => {
    console.log('artists table created');
}
    ).catch(err => {
    console.error('Error creating tables:', err);
});


export default sequelize;