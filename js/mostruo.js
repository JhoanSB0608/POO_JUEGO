import { Criatura } from "./criatura.js";

export class Mostruo extends Criatura {
    constructor(nombre, vidaInicial) {
        super(200, vidaInicial, 10);
        if (new.target === Mostruo) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.setNombre = nombre;
    }
    perderVida(damage) {
        this.vida -= damage;
    }
}

export class Orco extends Mostruo {
    constructor() {
        super("Orco", 250);
    }
}

export class Globin extends Mostruo {
    constructor() {
        super("Globin", 150);
    }
}

export class Kobolt extends Mostruo {
    constructor() {
        super("Kobolt", 100);
    }
}