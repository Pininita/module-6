import { Router } from "express";

import { songRoutes, artistRoutes } from "./index.js"

const router = Router();

router.use(songRoutes);
router.use(artistRoutes);


export default router;