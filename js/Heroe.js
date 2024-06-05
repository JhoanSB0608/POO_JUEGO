import { Criatura } from "./criatura.js";
import { Inventario } from "./inventario.js";

export class Heroe extends Criatura {
    #ataque = 10; // Definición del campo privado

    constructor() {
        super();
        this.setVidaBase = 160;
        this.descansado = true;
        this.inventario = new Inventario();
    }

    descansar() {
        let mensajes = [];
        if (!this.descansado) {
            this.setVida = 20;
            this.descansado = true;
            mensajes.push("El héroe ha descansado y ha recuperado 20 puntos de vida.");
        } else {
            mensajes.push("El héroe ya está descansado, no puede descansar nuevamente.");
        }
        return mensajes;
    }

    cansar() {
        this.descansado = false;
    }

    reiniciarInventario() {
        this.inventario = new Inventario();
    }

    get getAtaque() {
        return this.#ataque;
    }    
}