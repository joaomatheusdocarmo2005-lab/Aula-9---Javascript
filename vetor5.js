/* Números --> Maior e Menor */ 

const prompt = require("prompt-sync")();
let valores = [];
for (let i = 0; i < 5; i++) {
    valores.push(Number(prompt(`Digite o ${i+1}ª numero`)));
}
console.log("Maior =", Math.max(...valores));
console.log("Menor =", Math.min(...valores));