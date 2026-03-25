import * as camisetasService from "../services/camisetas.services.js";

export function getCatalogo(req, res) {
    const filters = {
        talla: req.query.talla,
        color: req.query.color,
        tag: req.query.tag,
        q: req.query.q,
        sort: req.query.sort
    };

    const resultado = camisetasService.getCatalogo(filters);

    if (resultado === null) {
        return res.status(404).json({ error: "Camiseta no encontrada" });
    }

    res.json(resultado);
}

export function getById(req, res) {
    const item = camisetasService.getById(req.params.id);
    item ? res.json(item) : res.status(404).json({ message: "Camiseta no encontrada" });
}