import { Router } from "express";
import sequelize from '../db/sequelize.js';
import { MovieController } from "../controllers/movies.controller.js";


const router = Router();
const controller = new MovieController()

router.get("/movies", controller.getMovies);

router.get("/movies/:id",controller.getMovieByID);

router.post("/movies", controller.create);

router.put("/movies/:id", controller.updateMovie);

router.delete("/movies/:id", controller.delete);

export default router;