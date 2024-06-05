export class Inventario {
    constructor() {
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item);
    }

    encontrarItem(nombreItem) {
        return this.items.find(item => item.nombre === nombreItem);
    }

    utilizarItem(item, heroe) {
        if (item && item.usar) {
            const mensaje = item.usar(heroe);
            this.items = this.items.filter(i => i !== item); // Eliminar item del inventario después de usarlo
            return mensaje;
        } else {
            return "No se pudo usar el ítem.";
        }
    }

    imprimirLista() {
        if (this.items.length === 0) {
            return ["El inventario está vacío."];
        }
        return this.items.map(item => `Item: ${item.nombre}`);
    }
}