import { Router } from "express";
import { SongController } from "../controllers/songs.controller.js";

const router = Router();
const controller = new SongController();

router.get("/songs",  controller.getSongs);

router.get("/songs/:id", controller.getSongById);

router.post("/songs", controller.create);

router.put("/songs/:id", controller.updateSong);

router.delete("/songs/:id", controller.deleteSong);

export default router;