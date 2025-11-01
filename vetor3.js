/* DIGITAR 5 ESTADOS E MOSTRA AS POSIÇÕES, 0,2,6 */ 

const prompt = require("prompt-sync")();

let estados = [];

for (let i = 0; i < 5; i++) {
    estados.push(prompt(`Digite o estado ${i+1}º:`));
}
//imprimir todos os estados
console.log("Estados digitados:",estados);