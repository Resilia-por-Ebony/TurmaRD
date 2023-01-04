/*
Elabore um sistema que dada a idade de um nadador 
classifique-o em uma das seguintes categorias:

Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos
*/

let status
const prompt = require("prompt-sync")();
let idade = prompt("Digite sua idade: ")

if (idade >= 5 && idade <= 7) {
    status = 'Infantil A'
}
else if (idade >= 8 && idade <= 11) {
    status = 'Infantil B'
}
else if (idade == 12 || idade == 13) {
    status = 'Juvenil A'
}
else if (idade >= 14 && idade <= 17) {
    status = 'Juvenil B'
}
else if (idade >= 18 && idade <= 59) {
    status = 'Adulto'
}
else if (idade >= 60 && idade <= 115) {
    status = 'Idoso'
}
else {
    status = 'Ops, algo errado não está certo!'
}

console.log(`\nCom ${idade}, sua classificação é: ${status}`);