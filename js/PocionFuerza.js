import { Item } from "./item.js";

// Clase para representar una poción de fuerza
export class PocionFuerza extends Item {
    /**
     * Constructor de la clase PocionFuerza
     */
    constructor() {
        super();
        this.setNombre = "Poción de Fuerza"; // Nombre de la poción
        this.Fuerza = 70; // Valor de aumento de fuerza
    }
}