/* DIGITAR 10 NÚMEROS -> SOMA, MÉDIA */ 

const prompt = require("prompt-sync")();
let num = [];

for (let i = 0; i < 10; i++) {
    num.push(Number(prompt(`Digite o ${i+1}º numero`)));

}

const soma = num.reduce((a,b)=>a+b,0);
const media = soma/10;
console.log("soma =",soma , "| Media =",media.toFixed(2));