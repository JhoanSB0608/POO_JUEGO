import { Criatura } from "./Criatura.js";
import { Monstruo } from "./Monstruo.js";
import { Heroe } from "./Heroe.js"
import { Orco } from "./Orco.js";
import { Goblin } from "./Goblin.js";
import { Kobold } from "./Kobold.js";
import { Juego } from "./Juego.js";




let personajeDefault = new Criatura();
let Heroe1 = new Heroe("Jhoan");
let Orco1 = new Orco();
let Goblin1 = new Goblin();
let Kobold1 = new Kobold();
let juego = new Juego();
console.log(personajeDefault);
console.log(Heroe1);
console.log(Orco1)
console.log(Goblin1)
console.log(Kobold1)
console.log(juego)