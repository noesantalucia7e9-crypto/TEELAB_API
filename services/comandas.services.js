import listaTickets from "../data/tickets.js";

export function getComandas() {
    return listaTickets;
}
export function getById(id) {
    return listaTickets.find(i => i.id === Number(id));
}
export function create(req, res) {
    const { fecha, estado } = req.body;
    const id = listaTickets.length + 1;
    const nuevoTicket = new Ticket(id, fecha, estado);
    listaTickets.push(nuevoTicket);
    res.status(201).json(nuevoTicket);
}