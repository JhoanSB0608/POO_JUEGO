export class Criatura {
    #vida;
    #vidaMaxima;
    #ataque;
    
    constructor(vidaMaxima = 200, vidaInicial = 100, ataque = 10) {
        if (new.target === Criatura) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.#vidaMaxima = vidaMaxima;
        this.#vida = vidaInicial;
        this.#ataque = ataque;
        this.nombre = "";
    }
    
    set setNombre(nom) {
        this.nombre = nom;
    }
    
    set setVida(puntos) {
        this.#vida += puntos;
        if (this.#vida > this.#vidaMaxima) {
            this.#vida = this.#vidaMaxima;
        }
    }
    
    set setVidaBase(puntos) {
        this.#vida = puntos;
    }
    
    set setAtaque(puntos) {
        this.#ataque += puntos;
    }
    
    get getAtaque() {
        return this.#ataque;
    }
    
    get getVida() {
        return this.#vida;
    }
    
    get getVidamaxima() {
        return this.#vidaMaxima;
    }
}