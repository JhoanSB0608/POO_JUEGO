import { Orco, Globin, Kobolt } from "./mostruo.js";
import { Pocion } from "./pocion_vida.js";

export class Area {
    constructor() {
        this.investigada = false;
        this.mostruo = null;
        this.item = null;
        this.probabilidadMonstruo = 0.7;
        this.probabilidadItem = 0.2;
        this.ataquesAlMonstruo = 0;
        this.vidaMaximaMonstruo = null;
        this.ataquesAlOrco = 0;
        this.ataquesAlGlobin = 0;
        this.ataquesAlKobolt = 0;
    }
    // Método para incrementar el contador de ataques al Orco
    aumentarAtaquesAlOrco() {
        this.ataquesAlOrco++;
    }

    // Método para incrementar el contador de ataques al Globin
    aumentarAtaquesAlGlobin() {
        this.ataquesAlGlobin++;
    }

    // Método para incrementar el contador de ataques al Kobolt
    aumentarAtaquesAlKobolt() {
        this.ataquesAlKobolt++;
    }

    // Método para obtener el contador de ataques al Orco
    getAtaquesAlOrco() {
        return this.ataquesAlOrco;
    }

    // Método para obtener el contador de ataques al Globin
    getAtaquesAlGlobin() {
        return this.ataquesAlGlobin;
    }

    // Método para obtener el contador de ataques al Kobolt
    getAtaquesAlKobolt() {
        return this.ataquesAlKobolt;
    }

    // Método para establecer la vida máxima del monstruo
    setVidaMaximaMonstruo(vidaMaxima) {
        this.vidaMaximaMonstruo = vidaMaxima;
    }

    // Método para obtener la vida máxima del monstruo
    getVidaMaximaMonstruo() {
        return this.vidaMaximaMonstruo;
    }

    // Método para incrementar el contador de ataques al monstruo
    aumentarAtaquesAlMonstruo() {
        this.ataquesAlMonstruo++;
    }

    // Método para obtener el contador de ataques al monstruo
    getAtaquesAlMonstruo() {
        return this.ataquesAlMonstruo;
    }

    aumentarAtaquesAlMonstruo() {
        this.ataquesAlMonstruo++;
    }

    verificarMonstruoDerrotado() {
        return this.mostruo && typeof this.mostruo.getVida === 'function' && this.mostruo.getVida() <= 0;
    }

    investigar() {
        if (this.investigada) {
            return { resultado: "Investigada", mensaje: "Esta área ya ha sido investigada." };
        }
        this.investigada = true;

        const random = Math.random();
        if (random < this.probabilidadMonstruo) {
            this.mostruo = this.generarMonstruo();
            return { resultado: "Monstruo", mensaje: `¡Un ${this.mostruo.nombre} ha aparecido!` };
        } else if (random < this.probabilidadMonstruo + this.probabilidadItem) {
            this.item = new Pocion();
            return { resultado: "Item", mensaje: `Has encontrado una ${this.item.nombre}.` };
        } else {
            return { resultado: "Nada", mensaje: "No has encontrado nada." };
        }
    }

    generarMonstruo() {
        const tiposDeMonstruos = [Orco, Globin, Kobolt];
        const MonstruoAleatorio = tiposDeMonstruos[Math.floor(Math.random() * tiposDeMonstruos.length)];
        return new MonstruoAleatorio();
    }

    puedeDescansar() {
        return !this.mostruo || this.mostruo.getVida <= 0;
    }
}