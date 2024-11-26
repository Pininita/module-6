import { Router } from "express";
import { ArtistController } from "../../../homework8/src/controllers/artists.controller.js";

const router = Router();
const controller = new ArtistController();

router.get("/song",  controller.getSongs);

router.get("/song/:id", controller.getSongById);

router.get("/song/name/:name", controller.getSongById);

router.post("/song", controller.create);

router.put("/song/:id", controller.updateSong);

router.delete("/song/:id", controller.deleteSong);

export default router;