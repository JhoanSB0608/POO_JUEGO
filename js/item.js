export class Item{
    #fuerza = 0
    constructor(){
        this.setNombre = undefined
    }
    set setNombre(nom){
        this.nombre = nom
    }
    set setFuerza(puntos){
        this.#fuerza += puntos;
    }
    /*utilizar(objetivo){

    }*/

}