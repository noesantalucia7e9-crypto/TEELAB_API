import { Router } from "express";
import * as comandasController from "../controllers/comandas.controller.js";
const router = Router();


router.get("/", comandasController.getComandas);

//router.post("/", comandasController.create);
//router.put("/:id", comandasController.update);
//router.delete("/:id", comandasController.remove);

export default router;