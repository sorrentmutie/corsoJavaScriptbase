//import { messaggio, cubo, piGreco, mioOggetto } from './primo-modulo.js';
import * as PrimoModulo from './primo-modulo.js';
import quadrato from './secondo-modulo.js';

console.log(PrimoModulo.messaggio);

const h1 = document.createElement('h1');
h1.innerText = PrimoModulo.messaggio;
document.body.appendChild(h1);

const numero = PrimoModulo.cubo(3);
const h2 = document.createElement('h2');
h2.innerText = numero + " " + PrimoModulo.piGreco;
document.body.appendChild(h2);

PrimoModulo.mioOggetto.disegna();

const numeroQuadrato = quadrato(5);
console.log(numeroQuadrato); 
