import { Criatura } from "./Criatura.js";
import { Inventario } from "./Inventario.js";

// Clase para representar un héroe en el juego
export class Heroe extends Criatura {
    inventario; // Inventario del héroe

    /**
     * Constructor de la clase Heroe
     * @param {string} nom - Nombre del héroe
     */
    constructor(nom) {
        super();
        this.getVidaMaxima;
        this.setNombre = nom;
        this.setVida = 0;
        this.inventario = new Inventario(); // Crear un nuevo inventario para el héroe
    }

    /**
     * Getter para obtener el inventario del héroe
     */
    get getInventario() {
        return this.inventario;
    }
}