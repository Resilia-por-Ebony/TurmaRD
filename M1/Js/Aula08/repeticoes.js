/*
A ideia de utilizar as repetições é fazer com que
o computador faça as ações repetidas vezes escrevendo
apenas uma. 

Em JS temos algumas opções de laços de repetição, 
veremos alguns exemplos abaixo;

Sintaxe:
WHILE
        while (teste lógico que retorna verdadei ou falso) {
            corpo da repetição, tudo que estiver
            dentro destas chaves, será repetido 
            enquanto o resultado do teste for verdadeiro.
        }

DO WHILE
            do while {
                corpo da repetição, tudo que estiver
                dentro destas chaves, será repetido 
                enquanto o resultado do teste for verdadeiro,
                porém, neste caso o teste é feito depois
                da primeira execução.
            } (teste lógico)


FOR 
    for (inicio ; fim ; passo) {
        corpo da repetição
    }
*/

/* Criando uma variável que servirão para contagem de 
repetições deste look */
let contador = 1

// Cria uma lista (Array) que armazenará os cadastro (Objetos)
let cadastro = []

// Criando um input para rodar via node no console
const input = require("prompt-sync")()


/* Iniciando o loop com o seguinte teste. 
O contatador que inicialmente tem o valor 0
Enquanto, ele for menor que 3, o loop será repetido; 
*/
while (n < 3) {
    console.log(n);

    // Criando o objeto pessoa.
    var pessoa = {
        nome : input('Nome: '),
        idade : input('Idade: ')
    }
    
    // Adc o objeto Pessoa no início do array
    cadastro.unshift(pessoa)
    
    // Adc o objeto Pessoa no final do array
    cadastro.push(pessoa)
    
    /*
    Pode ser usado também para remover um item do array
    Neste cenário: 
     -> 2 representa a posição pelo indíce.
     -> 0 indica que nenhum elemento será removido do array
     -> pessoa indica o elemento que será inserido no array
    */ 
    cadastro.splice(2, 0, pessoa)

    /*
    Neste cenário:
     -> 3 representa o índica a partir do qual a ação será feita 
     -> 2 representa quandos valores serão removidos.*/
    cadastro.splice(3, 2)
    
    /* 
    A incrementação é necessário para que receba 1 a cada
    execução do loop, desta forma, em algum momento ele atingirá
    o valor estabelecido como FLAG no teste*/ 
    contador++
} 

// Mostrando a lista com os objetos dentro
console.log(cadastro);

/*
Sempre importante considerar que qualquer dado inserido, gera
internamente um índice que permite que ele seja acessado, 
fatiado e etc. Este índice sempre começa naturalmente do 0 */

let numeros = ['manga','uva', 'banana', 'goiaba', 'jiló']
// índice         0      1        2         3        4

// Mostra apenas o valor que está no índice 2 do array
console.log(numeros[2])




//   inicio   -    fim    -   passo
for (let j=0  ;   j <= 5  ;   j++) {
    console.log(j);
}

let cores = ['vermelho', 'azul', 'preto']

/*
Uma forma de utilizar o for é iterando sobre uma coleção.
Por exemplo, i item COR, representa cada item dentro do
array CORES. 

Note que:
console.log(cor) -> mostra apenas os índices dos elementos
console.log(cores[cor]) -> mostra os valor dos do array
*/
for (cor in cores) {
    console.log(cores[cor]);
}


/*
Uma forma mais inteligente de fazer a mesma iteração é
utilizando um mais específico. Neste caso, podemos 
o valor diretamente e não apenas o índice como no exemplo
anterior.
*/
for (let cor of cores) {
    console.log(cor);
}















