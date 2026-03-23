import * as camisetasService from "../services/camisetas.services.js";

export function getCatalogo(req, res) {
    res.json(camisetasService.getCatalogo());
}

export function getById(req, res) {
    const item = camisetasService.getById(req.params.id);
    item ? res.json(item) : res.status(404).json({ message: "Camiseta no encontrada" });
}