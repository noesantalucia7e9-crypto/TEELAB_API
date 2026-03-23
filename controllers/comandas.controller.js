import* as comandasService from "../services/comandas.services.js";

export function getComandas(req, res) {
    res.json(comandasService.getComandas());
}