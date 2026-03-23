import { Router } from "express";
import * as camisetasController from "../controllers/camisetas.controller.js";
const router = Router();


router.get("/", camisetasController.getCatalogo);
router.get("/:id", camisetasController.getById);

//router.post("/", camisetasController.create);
//router.put("/:id", camisetasController.update);
//router.delete("/:id", camisetasController.remove);

export default router;