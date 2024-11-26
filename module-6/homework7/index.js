import express from 'express';
import router from './routes/artistsRoutes.js';  
import sequelize from './table_db/sequelize.js';
import config from './config/env.js'; 

const { port } = config;;   

async function main() {

  const app = express();

  app.use(express.json());


  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.use(router);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

main();