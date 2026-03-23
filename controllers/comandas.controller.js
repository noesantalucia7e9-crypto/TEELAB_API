import* as comandasService from "../services/comandas.services.js";

export function getComandas(req, res) {
    res.json(comandasService.getComandas());
}
export function getById(req, res) {
    const id = req.params.id;
    const tickets = comandasService.getById(id);
    if (tickets) {
        res.json(tickets);
    } else {
        res.status(404).json({ message: "Ticket not found" });
    }
}
export function create(req, res) {
}