import { Router } from "express";
import * as camisetasController from "../controllers/camisetas.controller.js";
const router = Router();


router.get("/", camisetasController.getCatalogo);
router.get("/:id", camisetasController.getById);

export default router;