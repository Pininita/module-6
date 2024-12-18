import { sequelize } from "./db/sequelize.js";
import env from "./config/env.js";
import { Server } from "./server.js";
import routes from './routes/routes.js'


async function main() {

  const server = new Server({
    port : env.port,
    routes: routes,
  });
 

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: false });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  server.start();

}

main();