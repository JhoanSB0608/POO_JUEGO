import { Criatura } from "./Criatura.js"
export class Monstruo extends Criatura{
    constructor(){
        super();
        this.setNombreMonstruo;
        this.setVidaMonstruo
    }
    set setNombreMonstruo(nom){
        this.setNombre = nom
    }
    set setVidaMonstruo(puntos){
        this.setVida = puntos;
    }
}