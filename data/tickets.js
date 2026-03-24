
let listaTickets = [

]

export class Ticket {
    
    constructor(id, fecha, estado) {
        this.id = id;
        this.fecha = fecha;
        this.estado = estado;
        this.items = [];
        this.total = 0;
    }

    calcularTotal() {
        this.total = this.items.reduce((acc, item) => acc + item.subtotal, 0);
    }
}

export default listaTickets