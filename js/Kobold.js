import { Monstruo } from "./Monstruo.js";

// Clase para representar un kobold
export class Kobold extends Monstruo {
    /**
     * Constructor de la clase Kobold
     */
    constructor() {
        super();
        this.setNombreMonstruo = "Kobold"; // Nombre del kobold
        this.setVidaMonstruo = -30; // Ajuste de vida del kobold
    }
}