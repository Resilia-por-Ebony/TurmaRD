//Operadores Aritméticos: 
let valor = 100;
console.log(valor + valor);
console.log(valor - 15);
console.log(valor * 10);
console.log(valor / 2);
console.log(2 ** 3);     


//Atribuição: (++) (--) (+=) (-=) (*=) (/=)
let idade = 18;
// exibe o resultado, depois faz a operação
console.log(idade++); 
console.log(idade); 

// exibe com a alteração
console.log(++idade); 


//Lógicos: (and - &&) (or - ||) (not - !)
console.log(true && true); // true
console.log(true && false); // false

console.log(

    10 + 10 > 15

        &&

    10 * 10 > 500

);

console.log(10 + 10 > 15 || 10 * 10 > 500);
console.log(10 != 11);

/*
Comparação:
Igualdade solta, compara apenas o valor 
*/
console.log('1' == 1); // true

// Igualdade estrita, compara valor e tipo 
console.log(1 === 1); // true
console.log('1' === 1); // false


// -------------------------------------  IF ELSE 
/*
Se hora atual entre 6 e 12 -> bom dia
Se entre 12 e 18 -> boa tarde
se não -> boa noite
*/
const dataHora = new Date().toLocaleString();
const data = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

// console.log(dataHora);
// console.log(data);
// console.log(hora);

/*
    Input
    Instalar módulo prompt-sync
    npm install prompt-sync ou yarn add prompt-sync
*/
const prompt = require("prompt-sync")();
let horas = prompt("Que horas são: ")

if (horas >= 0 && horas <= 12) {
    console.log('\nBom dia!');
}
else if (horas > 12 && horas <= 18) {
    console.log('\nBoa tarde!');
}
else if (horas > 18 && horas <= 24)
    console.log('\nBoa noite!');
else {
    console.log('\nOps, hora inválida!');
}

