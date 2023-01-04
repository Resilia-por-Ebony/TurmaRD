/*
Vamos criar uma mini calculadora para operações básicas.
Crie um menu para escolher as opções...
*/

let n1, n2, resultado
const prompt = require("prompt-sync")();

n1 = Number(prompt('Digite o 1º valor: '))
n2 = Number(prompt('Digite o 2º valor: '))

console.log(`
______MENU______
1 | Somar
2 | Subtrair
3 | Multiplicar
4 | Dividir
`);
let opc = prompt('Opção: ')

switch (opc) {
    case '1':
        resultado = n1 + n2
        break
    case '2':
        resultado = n1 - n2
        break
    case '3':
        resultado = n1 / n2
        break
    case '4':
        resultado = n1 * n2
        break
    default:
        resultado = '\nOps, algo errado não está certo!'
}

console.log(resultado);
