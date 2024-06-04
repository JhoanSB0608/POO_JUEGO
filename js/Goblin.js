import { Monstruo } from "./Monstruo.js";

// Clase para representar un goblin
export class Goblin extends Monstruo {
    /**
     * Constructor de la clase Goblin
     */
    constructor() {
        super();
        this.setNombreMonstruo = "Goblin"; // Nombre del goblin
        this.setVidaMonstruo = -50; // Ajuste de vida del goblin
    }
}