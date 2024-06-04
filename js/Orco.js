import { Monstruo } from "./Monstruo.js";

// Clase para representar un orco
export class Orco extends Monstruo {
    /**
     * Constructor de la clase Orco
     */
    constructor() {
        super();
        this.setNombreMonstruo = "Orco"; // Nombre del orco
        this.setVidaMonstruo = 50; // Ajuste de vida del orco
    }
}