import { camisetas } from "../data/camisetas.js";

export function getCatalogo(filters) {
    const validSorts = ["precio_asc", "precio_desc", "nombre_asc", "nombre_desc"];

    if (filters.sort && !validSorts.includes(filters.sort)) {
        return null;
    }

    let resultado = camisetas.filter(camiseta => {
        let coincideTalla = !filters.talla || camiseta.tallas.includes(filters.talla.toUpperCase());
        let coincideColor = !filters.color || camiseta.colores.includes(filters.color.toLowerCase());
        let coincideTag = !filters.tag || camiseta.tags.includes(filters.tag.toLowerCase());

        let coincideBusqueda = true;
        if (filters.q) {
            let busqueda = filters.q.toLowerCase();
            let nombre = camiseta.nombre.toLowerCase();
            let descripcion = camiseta.descripcion.toLowerCase();
            coincideBusqueda = nombre.includes(busqueda) || descripcion.includes(busqueda);
        }

        return coincideTalla && coincideColor && coincideTag && coincideBusqueda;
    });

    if (filters.sort === "precio_asc") resultado.sort((a, b) => a.precioBase - b.precioBase);
    else if (filters.sort === "precio_desc") resultado.sort((a, b) => b.precioBase - a.precioBase);
    else if (filters.sort === "nombre_asc") resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    else if (filters.sort === "nombre_desc") resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));

    return resultado;
}

export function getById(id) {
    return camisetas.find(i => String(i.id) === String(id));
}