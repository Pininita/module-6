import { Router } from "express";
import { ArtistController } from "../controllers/artists.controller.js";

const router = Router();
const controller = new ArtistController();

router.get("/artists",  controller.getArtists);

router.get("/artists/:id", controller.getArtistById);

router.get("/artists/:id/songs", controller.getSongsByArtistId)

router.post("/artists", controller.create);

router.put("/artists/:id", controller.updateArtist);

router.delete("/artists/:id", controller.deleteArtist);

export default router;