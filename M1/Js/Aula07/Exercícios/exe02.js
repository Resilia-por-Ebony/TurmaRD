/*
Desenvolva um sistema em que:
•Leia 4 números;
•Calcule o quadrado do primeiro;
•Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
•Caso contrário, imprima os valores lidos e seus respectivos quadrados.
*/

const prompt = require("prompt-sync")();
let num1 = prompt('1º Número: ')
let num2 = prompt('2º Número: ')
let num3 = prompt('3º Número: ')
let num4 = prompt('4º Número: ')

let resp1 = num1 ** 2
let resp2 = num2 ** 2
let resp3 = num3 ** 2
let resp4 = num4 ** 2

if (resp3 >= 1000) {
    console.log(`\nValor inserido: ${num3} | ${num3}² = ${resp3}`);
}
else {
    console.log(`
Valor inserido: ${num1} | ${num3}² = ${resp1}
Valor inserido: ${num2} | ${num2}² = ${resp2}
Valor inserido: ${num3} | ${num3}² = ${resp3}
Valor inserido: ${num4} | ${num4}² = ${resp4}
`);
}




