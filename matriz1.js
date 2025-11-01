/*ENTENDER COMO PERCORRER UMA MATRIZ SIMPLE*/
const matriz = [
    [1,2],
    [3,4]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz [i].length; j++) {
        console.log(`Posicao [${i}][${j}] = ${matriz[i][j]}`);
    }
}
// Black Box