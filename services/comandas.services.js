import * as camisetasService from "./camisetas.services.js";
import listaTickets, { Ticket } from "../data/tickets.js";

export function getComandas() {
    return listaTickets;
}

export function getById(id) {
    return listaTickets.find(i => i.id === id);
}

export function create(req, res) {
    const { cliente, items } = req.body;

    if (!cliente || !cliente.nombre || cliente.nombre.length < 2)
        return res.status(400).json({ error: "cliente.nombre es obligatorio (mín. 2 caracteres)" });
    if (!cliente.email || !cliente.email.includes("@"))
        return res.status(400).json({ error: "cliente.email es obligatorio y debe tener formato válido" });
    if (!items || items.length === 0)
        return res.status(400).json({ error: "items es obligatorio y debe tener al menos 1 elemento" });

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.cantidad || item.cantidad < 1)
            return res.status(400).json({ error: `items[${i}].cantidad debe ser un entero ≥ 1` });

        const camiseta = camisetasService.getById(item.camisetaId);
        if (!camiseta)
            return res.status(400).json({ error: `items[${i}].camisetaId=${item.camisetaId} no existe` });
        if (!camiseta.tallas.includes(item.talla))
            return res.status(400).json({ error: `items[${i}].talla="${item.talla}" no disponible` });
        if (!camiseta.colores.includes(item.color))
            return res.status(400).json({ error: `items[${i}].color="${item.color}" no disponible` });
    }

    const num = listaTickets.length + 1;
    const id = "ORD-" + String(num).padStart(4, "0");
    const nuevoTicket = new Ticket(id, new Date().toISOString(), "recibida");

    nuevoTicket.items = items.map(item => {
        const camiseta = camisetasService.getById(item.camisetaId);
        const precioUnitario = camiseta.precioBase;
        return {
            camisetaId: item.camisetaId,
            nombre: camiseta.nombre,
            talla: item.talla,
            color: item.color,
            cantidad: item.cantidad,
            precioUnitario,
            subtotal: precioUnitario * item.cantidad
        };
    });

    nuevoTicket.calcularTotal();
    listaTickets.push(nuevoTicket);
    res.status(201).json(nuevoTicket);
}
