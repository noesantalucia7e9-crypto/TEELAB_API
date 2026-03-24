import { camisetas } from "../data/camisetas.js";

export function getCatalogo() {
    return camisetas;
}

export function getById(id) {
    return camisetas.find(i => String(i.id) === String(id));
}