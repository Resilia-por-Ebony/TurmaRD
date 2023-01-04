/*
João, homem de bem, comprou um microcomputador para controlar o 
rendimento diário de seu trabalho. Toda vez que ele traz um peso 
de tomate maior que o estabelecido pelo regulamento do estado de 
São Paulo (50 quilos) deve pagar uma multa de R$4,00 por quilo excedente. 

João precisa que você faça um sistema que leia a variável (peso)'peso de tomates'
e verifique se há excesso. Se houver, grave na variável (excesso) e na variável 
(multaPG), o valor da multa que João deverá pagar. 
Caso contrário mostrar tais variáveis com valor ZERO.
*/

let excesso=0, peso, multaPG=0
const limite=50, multa=4

const prompt = require("prompt-sync")();
peso = prompt("Oi joão, quantos quilos c trouxe: ")

if (peso > limite) {
    excesso = peso - limite
    multaPG = excesso * multa
}

console.log(`
Peso: ${peso}kg
Valor excedido: ${excesso} Kg
Multa a pagar: R$ ${multaPG}
`);





