import { Heroe } from './heroe.js';

export class Combate {
    comenzarCombate(heroe, monstruo) {
        let mensajes = [];
        while (heroe.getVida > 0 && monstruo.getVida > 0) {
            this.atacar(heroe, monstruo);
            if (monstruo.getVida > 0) {
                this.atacar(monstruo, heroe);
            }
        }
        if (heroe.getVida <= 0) {
            mensajes.push(`${heroe.nombre} ha sido derrotado.`);
        } else {
            mensajes.push(`${monstruo.nombre} ha sido derrotado.`);
        }
        return mensajes;
    }

    atacar(atacante, objetivo) {
        const dano = atacante.getAtaque(); // Corregido: se llamó al método getAtaque
        objetivo.setVida(-dano); // Corregido: se llamó al método setVida y se restó el daño
        if (objetivo instanceof Heroe) {
            objetivo.cansar();
        }
    }    
}