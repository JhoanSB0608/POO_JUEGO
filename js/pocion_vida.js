export class Pocion {
    constructor() {
        this.nombre = "Poción de Vida";
    }

    usar(heroe) {
        heroe.setVida = 10; // Incrementa la vida del héroe en 10
        return "Has usado una Poción de Vida.";
    }
}