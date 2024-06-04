// Clase base para las criaturas del juego
export class Criatura {
    #vidaMaxima = 100; // Vida máxima de la criatura
    #ataque = 50; // Puntos de ataque de la criatura
    nombre; // Nombre de la criatura

    /**
     * Constructor de la clase Criatura
     */
    constructor() {
        this.setNombre = "Gandalf"; // Nombre por defecto
    }

    /**
     * Setter para el nombre de la criatura
     */
    set setNombre(nom) {
        this.nombre = nom;
    }

    /**
     * Setter para aumentar la vida de la criatura
     */
    set setVida(puntos) {
        this.#vidaMaxima += puntos;
    }

    /**
     * Setter para aumentar el ataque de la criatura
     */
    set setAtaque(puntos) {
        this.#ataque += puntos;
    }

    /**
     * Getter para obtener la vida máxima de la criatura
     */
    get getVidaMaxima() {
        return this.#vidaMaxima;
    }

    /**
     * Getter para obtener los puntos de ataque de la criatura
     */
    get getAtaque() {
        return this.#ataque;
    }
}