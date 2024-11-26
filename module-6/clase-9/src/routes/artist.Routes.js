import { Router } from "express";
import { ArtistController } from "../controllers/artists.controller.js";

const router = Router();
const controller = new ArtistController();

router.get("/artist",  controller.getArtists);

router.get("/artist/:id", controller.getartistById);

router.get("/artist/name/:name", controller.getartistById);

router.post("/artist", controller.create);

router.put("/artist/:id", controller.updateArtist);

router.delete("/artist/:id", controller.deleteArtist);

export default router;