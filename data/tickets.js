
let listaTickets = [

]

class Ticket {
    
    constructor(id, fecha, estado) {
        this.id = id;
        this.fecha = fecha;
        this.estado = estado;
        this.items = [];
        this.total = 0;
    }

    calcularTotal() {
        this.total = this.items.reduce((elemento, item) => elemento + item.precio * item.cantidad, 0);
    }
}

export default listaTickets