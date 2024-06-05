import { Area } from "./area.js";
import { Combate } from "./combate.js";
import { Heroe } from "./heroe.js";
import { Pocion } from "./pocion_vida.js";
import { Orco, Globin, Kobolt } from "./mostruo.js";

export class Juego {
    constructor() {
        this.historial = [];
        this.heroe = new Heroe();
        this.combate = new Combate();
        this.juegoTerminado = false;
        this.areas = [new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area()];
        this.areaActual = null;
    }

    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    ejecutar(accion, objetivo) {
        this.verificarJuego();
        if (this.juegoTerminado && accion !== 'reiniciar') {
            this.loguear("No puede realizar acciones estando muerto...");
            return;
        }
        switch (accion) {
            case 'atacar':
                this.atacar();
                break;
            case 'moverse':
                this.moverse();
                break;
            case 'investigar':
                this.investigar();
                break;
            case 'descansar':
                this.descansar();
                break;
            case 'utilizarItem':
                this.utilizarItem(objetivo);
                break;
            case 'verInventario':
                this.verInventario();
                break;
            case 'reiniciar':
                this.reiniciar();
                break;
            default:
                this.loguear("Acción no reconocida.");
        }
    }

    verificarJuego() {
        if (this.heroe.getVida <= 0) {
            this.juegoTerminado = true;
            this.loguear("¡Has muerto!");
        }
    }

    investigar() {
        if (!this.areaActual) {
            this.loguear("No hay un área actual para investigar. ¡Muévete primero!");
            return;
        }
        const resultado = this.areaActual.investigar();
        this.loguear(resultado.mensaje);

        if (resultado.resultado === "Monstruo") {
            this.loguear("Derríbalo antes de moverse a la siguiente área.");
            this.heroe.bloqueado = true;
        } else if (resultado.resultado === "Item") {
            this.heroe.inventario.agregarItem(resultado.objeto);
        }
    }

    verInventario() {
        const mensajes = this.heroe.inventario.imprimirLista();
        mensajes.forEach(mensaje => this.loguear(mensaje));
    }

    utilizarItem(itemNombre) {
        const item = this.heroe.inventario.encontrarItem(itemNombre);
        if (item) {
            const mensaje = this.heroe.inventario.utilizarItem(item, this.heroe);
            this.loguear(mensaje);
            this.loguear(`Vida de ${this.heroe.nombre}: ${this.heroe.getVida}`);
        } else {
            this.loguear("El item no está en el inventario.");
        }
    }

    atacar() {
        if (!this.areaActual.mostruo) {
            this.loguear("No hay monstruo para atacar.");
            return;
        }
    
        const monstruo = this.areaActual.mostruo;
        const dano = this.heroe.getAtaque; // Obtener el daño del héroe
    
        // Realizar el ataque al monstruo y registrar el daño
        monstruo.perderVida(dano);
        this.loguear(`${this.heroe.nombre} ha atacado a ${monstruo.nombre} causando ${dano} de daño.`);
    
        // Incrementar el contador de ataques al monstruo correspondiente
        if (monstruo instanceof Orco) {
            this.areaActual.aumentarAtaquesAlOrco();
            const ataquesAlOrco = this.areaActual.getAtaquesAlOrco();
            if (ataquesAlOrco >= 25) {
                this.loguear("¡El Orco ha sido vencido!");
                this.areaActual.mostruo = null; // Eliminar al monstruo vencido
                this.heroe.bloqueado = false; // Permitir al jugador moverse después de vencer al Orco
            }
        } else if (monstruo instanceof Globin) {
            this.areaActual.aumentarAtaquesAlGlobin();
            const ataquesAlGlobin = this.areaActual.getAtaquesAlGlobin();
            if (ataquesAlGlobin >= 15) {
                this.loguear("¡El Globin ha sido vencido!");
                this.areaActual.mostruo = null; // Eliminar al monstruo vencido
                this.heroe.bloqueado = false; // Permitir al jugador moverse después de vencer al Globin
            }
        } else if (monstruo instanceof Kobolt) {
            this.areaActual.aumentarAtaquesAlKobolt();
            const ataquesAlKobolt = this.areaActual.getAtaquesAlKobolt();
            if (ataquesAlKobolt >= 10) {
                this.loguear("¡El Kobolt ha sido vencido!");
                this.areaActual.mostruo = null; // Eliminar al monstruo vencido
                this.heroe.bloqueado = false; // Permitir al jugador moverse después de vencer al Kobolt
            }
        }
    }     
    
    moverse() {
        if (this.heroe.bloqueado) {
            this.loguear("No puedes moverte mientras hay un monstruo vivo en el área.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * this.areas.length);
        this.areaActual = this.areas[indiceAleatorio];
        this.loguear("Te has movido a una nueva área.");
    }

    descansar() {
        if (!this.areaActual) {
            this.loguear("No hay un área actual para descansar.");
            return;
        }
        if (!this.areaActual.puedeDescansar()) {
            this.loguear("No puedes descansar en esta área.");
            return;
        }
        const mensajes = this.heroe.descansar();
        mensajes.forEach(mensaje => this.loguear(mensaje));
        this.loguear(`Vida de ${this.heroe.nombre}: ${this.heroe.getVida}`);
    }

    reiniciar() {
        this.heroe.setVidaBase = 160;
        this.heroe.descansado = true;
        this.heroe.bloqueado = false;
        this.juegoTerminado = false;
        this.areas = [new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area(), new Area()];
        this.heroe.reiniciarInventario();
        this.loguear("El juego ha sido reiniciado satisfactoriamente.");
        console.log("Historial antes del reinicio:");
        const data = {};
        this.historial.forEach((mensaje, index) => {
            data[`Mensaje ${index + 1}`] = mensaje;
        });
        console.table(data);
        this.historial = [];
    }
}